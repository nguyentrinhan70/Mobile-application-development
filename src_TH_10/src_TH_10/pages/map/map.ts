import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'map-page',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
              public geolocation: Geolocation) {
  }

  ionViewDidLoad(){
    
    console.log('Start MapPage');
    this.setCurrentPosition();
  }

  setCurrentPosition() {
  
    this.geolocation.getCurrentPosition().then(
        position => {
          this.setMap(position.coords.latitude, position.coords.longitude);
        },
        error => {
          console.log(error);
      }
    );
  }

  setMap(latitude, longitude){
    
      let latLng = new google.maps.LatLng(latitude, longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

	addMarker() {

	  let marker = new google.maps.Marker({
	    map: this.map,
	    animation: google.maps.Animation.DROP,
	    position: this.map.getCenter()
	  });

	  let content = "<h4>Information!</h4>";          
	  this.addInfoWindow(marker, content);

	}

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

}