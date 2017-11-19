import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  private mensUrl = `${environment.apiUrl}/api/mens`;
  private womensUrl = `${environment.apiUrl}/api/womens`;
  private allUrl = `${environment.apiUrl}/api/all`;
  private itemUrl = `${environment.apiUrl}/api/`;

  getAllShirts(): Promise<any[]> {
    return this.http.get(this.allUrl)
               .toPromise()
               .then( response => {
                 return JSON.parse(response['_body']);
               })
               .catch(this.handleError);
  }

  getAllMensShirts(): Promise<any[]> {
    return this.http.get(this.mensUrl)
               .toPromise()
               .then( response => {
                 return JSON.parse(response['_body']);
               })
               .catch(this.handleError);
  }

  getAllWomensShirts(): Promise<any[]> {
    return this.http.get(this.womensUrl)
               .toPromise()
               .then( response => {
                 return JSON.parse(response['_body']);
               })
               .catch(this.handleError);
  }

  getSpecificShirt(selectedShirt): Promise<any> {
    return this.http.get(this.itemUrl + selectedShirt)
               .toPromise()
               .then( response => {
                 return JSON.parse(response['_body']);
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
