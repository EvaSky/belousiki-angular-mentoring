import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly baseUrl = `http://localhost:3004/auth`;

  constructor(private http: HttpClient) { }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(login, pass): Observable<any> {
    const body = {login: `${login}`, password: `${pass}`};
    return this.http.post(`${this.baseUrl}/login`, body)
      .pipe(tap(token => {
        console.log(token);
        localStorage.setItem('token', token.token);
      }));
  }

  logout(): void {
    localStorage.removeItem('token');
  } 

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token !== undefined && token !== null;
  }

  getUserInfo(): Observable<User> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: {'Authorization': token}
    };
    return this.http.post(`${this.baseUrl}/userinfo`, null, httpOptions)
      .pipe(map(user => {
         return new User(user);
      }));
  }
}
