import { Injectable } from '@angular/core';
import { UserDTO } from '../dtos/User';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles'));
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getUser(): UserDTO {
    const userString = localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString) as UserDTO;
    }
    return null; 
  }
  public setUser(user: UserDTO) {
    const userString = JSON.stringify(user);
    localStorage.setItem('user', userString);
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken');
  }

  
  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

  public getUsername(): any {
    const token = this.getToken();
    
    const tokenParts = token.split('.');
    if (tokenParts.length === 3) {
      const payload = JSON.parse(decodeURIComponent(window.atob(tokenParts[1])));
      if (payload && payload.sub) {
        return payload.sub;
      }
    }
    return {};
  }

  public getTokenExpiration(token): Date {
    const tokenParts = token.split('.');
  
    if (tokenParts.length !== 3) {
      // El token no tiene el formato esperado
      return new Date(0); // Se considera como expirado
    }
  
    const payload = JSON.parse(window.atob(tokenParts[1]));
    if (!payload) {
      // No se pudo decodificar el payload del token
      return new Date(0); // Se considera como expirado
    }
  
    if (!payload.exp) {
      // El payload no contiene la propiedad 'exp' para la fecha de expiración
      return new Date(0); // Se considera como expirado
    }
  
    const expirationTimestamp = Number(payload.exp) * 1000;
    return new Date(expirationTimestamp);
  }
  
}
