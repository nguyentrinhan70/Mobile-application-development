import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Server {

  constructor(public http: HttpClient) {
  }

  post(url: string, params?: any) {
    const CONTENT_TYPE = 'application/x-www-form-urlencoded; charset=UTF-8';
    let headers = new HttpHeaders({ 'Content-Type': CONTENT_TYPE });
    let options = { headers: headers };
    return this.http.post(url, params, options);
  }
  
}
