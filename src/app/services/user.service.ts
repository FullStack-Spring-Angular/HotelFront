import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public login(loginData: any) {
    return this.httpclient.post(environment.HOTEL_API + 'auth/login', loginData, {
      headers: this.requestHeader,
    });
  }
  public register(registerData: any) {
    return this.httpclient.post(environment.HOTEL_API + 'auth/register', registerData, {
      headers: this.requestHeader,
    });
  }

  public logout() {
    return this.httpclient.post(environment.HOTEL_API + 'auth/logout', {
      headers: this.requestHeader,
    });
  }

  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles(); // LLega Admin

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles[0].length; j++) {
          if (userRoles === allowedRoles[j]) {
            isMatch = true;
          } else {
          }
        }
      }
    }
    return isMatch;
  }
}
