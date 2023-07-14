import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-habitacion',
  templateUrl: './register-habitacion.component.html',
  styleUrls: ['./register-habitacion.component.scss']
})
export class RegisterHabitacionComponent {

  habitacionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.habitacionForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      numCamas: ['', Validators.required],
      numBanos: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }


  registrarHabitacion(): void {
    if (this.habitacionForm.valid) {
      // Aquí puedes realizar el envío de los datos al servidor o ejecutar la lógica necesaria
      console.log(this.habitacionForm.value);
      // Reiniciar el formulario después de enviar los datos
      this.habitacionForm.reset();
    }
  }
}
