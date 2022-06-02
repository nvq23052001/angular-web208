import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const apiUrl = `http://localhost:3001`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(user: any) {
    return this.http.post(`${apiUrl}/signup`, user);
  }
  signin(user: any) {
    console.log(user);
    return this.http.post(`${apiUrl}/signin`, user);
  }
}
