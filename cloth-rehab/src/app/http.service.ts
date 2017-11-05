import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  private shirtsUrl = '/api/shirts';

  // getShirts(): Promise<any[]> {
  //   return this.http.get(this.shirtsUrl)
  //              .toPromise()
  //              .then(response => response.json())
  //              .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
