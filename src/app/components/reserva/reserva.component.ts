import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent {

  reserva = {
    nombre: '',
    correo: '',
    telefono: '',
    fechaCheckin: '',
    fechaCheckout: '',
    tipoHabitacion: '',
    extras: {
      desayuno: false,
      spa: false,
      estacionamiento: false
    }
  };
  step = 1;

  setStep(step: number) {
    this.step = step;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  submitForm() {
    console.log(this.reserva); // Aquí puedes enviar los datos al servidor o realizar cualquier otra acción necesaria
  }
}
