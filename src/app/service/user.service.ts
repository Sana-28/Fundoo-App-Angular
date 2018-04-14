import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; //use to share data b/w components
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions, Response } from '@angular/http';
import { NotesResponse } from '../response/notesresponse';

/*It looks similar to component file but  but it uses the @Injectable() 
decorator, which means we can import it. into other components and access
 its properties and methods.*/

@Injectable()
export class UserService {

  /*model property for class userservice can accept any object */
  model: any = {};

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('Authorization')
    })
  };

  /*HttpClient is available as an injectable class, with methods 
  to perform HTTP requests. */
  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:8080/ToDo-App/';

  /*A representation of any set of values over any amount of time.
   This is the most basic building block of RxJS*/
  public postService(url, model): Observable<any> {

    console.log(url, model);
    var urlpath = this.URL.concat(url);
    console.log(urlpath);
    return this.http.post<any>(urlpath, model, { observe: 'response' });
  }

  putService(url, note): Observable<any>{

    console.log(url,note);
    var urlpath = this.URL.concat(url);
    console.log(urlpath);
    return this.http.put(urlpath, note, this.httpOptions);
  }

  getService(url,notes):Observable<NotesResponse[]>{
    console.log(url,notes);
    var urlpath=this.URL.concat(url);
    console.log(urlpath);
    return this.http.get<NotesResponse[]>(urlpath,this.httpOptions);
  }
}
