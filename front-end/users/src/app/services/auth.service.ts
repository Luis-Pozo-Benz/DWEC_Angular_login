import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = "/api/auth";

  constructor(private http: HttpClient) {}
  
  login(body: {username:string ; password:string}):Observable<any> {
    console.log("me han llamado!!!");
    return this.http.post(`${this.apiUrl}/login`, body);
  }
}
