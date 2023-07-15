import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient
  ) { }

  public getActiveHabitaciones() {
    return this.httpclient.get(environment.HOTEL_API + 'habitaciones/disponibles', {
      headers: this.requestHeader,
    });
  }
}
