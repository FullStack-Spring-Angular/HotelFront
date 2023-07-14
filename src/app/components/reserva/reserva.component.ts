import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
})
export class ReservaComponent {
  habitaciones: any[] = [];

  reserva = {
    nombre: '',
    correo: '',
    telefono: '',
    fechaCheckin: '',
    fechaCheckout: '',
    tipoHabitacion: this.habitaciones,
    extras: {
      desayuno: false,
      spa: false,
      estacionamiento: false,
    },
  };
  step = 1;

  constructor(private toastrService: ToastrService) {}
  setStep(step: number) {
    this.step = step;
  }

  ngOnInit(){

  }

  reservaForm() {
    console.log({ ...this.reserva }); // Aquí puedes enviar los datos al servidor o realizar cualquier otra acción necesaria
  }

  numHabitaciones() {
    if (this.habitaciones == null || this.habitaciones.length == 0) {
      this.toastrService.info(
        'Seleccione al menos una habitación',
        'Por favor',
        { timeOut: 2000 }
      );
      return false;
    }
    return true;
  }

  addHabitacion() {
    this.habitaciones.push({ tipoHabitacion: 'individual' }); // Agrega una nueva habitación con un tipo de habitación por defecto
  }
  
  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
