import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthResponseData } from '../../interfaces/auth-response-data';
import { LoginCredentials } from '../../interfaces/login-credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authUrl = 'https://private-052d6-testapi4528.apiary-mock.com/authenticate';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }
  constructor(private http: HttpClient) { }

  login(loginCredentials: LoginCredentials):Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(this.authUrl, loginCredentials, this.httpOptions);
  }
}
