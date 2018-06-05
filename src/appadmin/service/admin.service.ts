/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is Admin service i.e. common Http services contains methods to get,put,post,delete requests 
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; //use to share data b/w components
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions, Response } from '@angular/http';

import { environment } from "../../environments/environment";

@Injectable()
export class AdminService {

  /*model property for class userservice can accept any object */
  model: any = {};

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     })
  };

   public getToken(): string {
     return localStorage.getItem('Authorization');
   }


  constructor(private http: HttpClient) { 
  }

  private URL= environment.base_url;

  public getService(url): Observable<any> {
    let urlpath=this.URL.concat(url);
    return this.http.get<any>(urlpath,this.httpOptions);
  }

  //debugger;
  public postService(url, model? : any): Observable<any> {

    console.log(url, model);
    let urlpath=this.URL.concat(url);
    return this.http.post<any>(urlpath, this.httpOptions, { observe: 'response'});
  }
}