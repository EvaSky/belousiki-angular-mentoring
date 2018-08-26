import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly baseUrl = `http://localhost:3004/auth`;
  userSub: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(login, pass): Observable<any> {
    const body = {login: `${login}`, password: `${pass}`};
    return this.http.post(`${this.baseUrl}/login`, body)
      .pipe(tap((token: any) => {
            console.log(token);
            localStorage.setItem('token', token.token);
          }),
          switchMap(() => {
            return this.getUserInfo();
      }));
  }

  logout(): void {
    localStorage.removeItem('token');
    this.userSub.next(null);
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
    return this.http.post<any>(`${this.baseUrl}/userinfo`, null, httpOptions)
      .pipe(map(user => {
        const loggedUser = new User(user);
        this.userSub.next(loggedUser);
        return user;
      }));
  }
}
