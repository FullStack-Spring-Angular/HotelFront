import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabitacionesService } from 'src/app/services/habitaciones.service';

@Component({
  selector: 'app-register-habitacion',
  templateUrl: './register-habitacion.component.html',
  styleUrls: ['./register-habitacion.component.scss']
})
export class RegisterHabitacionComponent {

  @Input() dataRegistroHabitacion;


  ngOnInit() {
    console.log(this.dataRegistroHabitacion);
  }
}
