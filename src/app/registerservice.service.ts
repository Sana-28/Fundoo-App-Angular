import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegisterserviceService {

  constructor(private http:HttpClient) { }

  private URL='http://localhost:8080/ToDo-App/api'

  public register() {
    return this.http.get(this.URL);
  }
}
