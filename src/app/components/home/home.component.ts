import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private userAuthService: UserAuthService){}

  rooms: any[] = [];
  currentPage = 1;
  isLoading = false;
  searchFilters = {
    price: '',
    roomType: ''
  };

  roomTypes = ['Individual', 'Doble', 'Suite'];

  ngOnInit() {
    this.loadMoreRooms();
  }

  loadMoreRooms() {
    if (this.isLoading) return;

    this.isLoading = true;

    // Simular una llamada a una API para obtener las habitaciones adicionales
    setTimeout(() => {
      const newRooms = [
        { name: 'Habitación 1', description: 'Descripción de la habitación 1', price: 100 },
        { name: 'Habitación 2', description: 'Descripción de la habitación 2', price: 150 },
        { name: 'Habitación 3', description: 'Descripción de la habitación 3', price: 200 }
      ];

      this.rooms = this.rooms.concat(newRooms);

      this.currentPage++;
      this.isLoading = false;
    }, 1000);
  }

  onSubmit() {
    // Lógica para procesar los filtros de búsqueda
    console.log('Filtros de búsqueda:', this.searchFilters);
  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }
}
