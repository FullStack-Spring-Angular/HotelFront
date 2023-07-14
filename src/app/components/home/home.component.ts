import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Habitaciones } from 'src/app/models/habitaciones';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private userAuthService: UserAuthService,
    private habitacionesService: HabitacionesService,
    public toastrService: ToastrService
  ) {}

  rooms: any[] = [];
  currentPage = 1;
  isLoading = false;
  searchFilters = {
    price: '',
    roomType: '',
  };

  habitaciones: Habitaciones[] = [];

  roomTypes = ['Individual', 'Doble', 'Suite'];

  ngOnInit() {
    this.loadMoreRooms();
  }

  loadMoreRooms() {
    if (this.isLoading) return;
    this.isLoading = true;

    this.habitacionesService.getActiveHabitaciones().subscribe(
      (response: any) => {
        this.habitaciones = response;
      },
      (error) => {
        console.log(error.message);
      }
    );
    // Simular una llamada a una API para obtener las habitaciones adicionales
    setTimeout(() => {
      const newRooms = [
        {
          name: 'Habitación 1',
          description: 'Descripción de la habitación 1',
          price: 100,
        },
        {
          name: 'Habitación 2',
          description: 'Descripción de la habitación 2',
          price: 150,
        },
        {
          name: 'Habitación 3',
          description: 'Descripción de la habitación 3',
          price: 200,
        },
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
