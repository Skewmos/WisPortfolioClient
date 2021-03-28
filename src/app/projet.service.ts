import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http: HttpClient) { 
  }
  

  get() {
    return this.http.get<any>("http://localhost:8000/api/projects"); 
  }
}
