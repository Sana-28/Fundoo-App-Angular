import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; //use to share data b/w components
import { Observable } from 'rxjs/Observable';

/*It looks similar to component file but  but it uses the @Injectable() 
decorator, which means we can import it into other components and access
 its properties and methods.*/

@Injectable()
export class RegisterService {

  model:any={}; 

  constructor(private http:HttpClient) { }

  private URL='http://localhost:8080/ToDo-App/';

  public urlpath : string;

  public register(path,model):Observable<HttpResponse<any>> {
    console.log(path,model);
    this.urlpath=this.URL.concat(path);
    console.log(this.urlpath);
    return this.http.post<any>(this.urlpath,model);
  }
}
