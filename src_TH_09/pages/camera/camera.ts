import { Component } from '@angular/core';
import { Platform, NavController, NavParams, AlertController} from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'camera-home',
  templateUrl: 'camera.html'
})

export class CameraPage {

  mobileDevice:any;
  image: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, 
      public platform: Platform, public camera: Camera ){

 	  this.mobileDevice = this.platform.is('cordova');
    this.image = "assets/imgs/atm.png";

  }

  ionViewDidLoad() {
  }
 
  takePicture() {
    
    if (this.mobileDevice) {
      let options = { 
                quality : 100, 
                destinationType : this.camera.DestinationType.DATA_URL, 
                sourceType : this.camera.PictureSourceType.CAMERA, 
                allowEdit : true,
                encodingType: this.camera.EncodingType.JPEG,
                targetWidth: 400,
                targetHeight: 400, 
                saveToPhotoAlbum: false,
      };

      this.camera.getPicture(options).then((imageData) => {
        this.image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
      });

    } else {
      this.image = '';
      let prompt = this.alertCtrl.create({
        title: 'Chụp hình',
        message: 'Chức năng không sử dụng trên PC!',
        buttons: [
          {
            text: 'OK',
            cssClass: 'prompt-color',
          },
        ]
      });
      prompt.present();
    }
  }
}
