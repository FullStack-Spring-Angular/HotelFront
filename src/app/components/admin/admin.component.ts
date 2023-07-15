import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  currentSection: string;
  habitacionForm: FormGroup;
  datosHabitacion;
  enviar: boolean = false;

  habitaciones:any[] = [
    {
      id: 1,
      nombre: "Habitación Deluxe",
      descripcion: "Amplia habitación con vistas al mar",
      numCamas: 2,
      numBanos: 1,
      precio: 200
    },
    {
      id: 2,
      nombre: "Suite Presidencial",
      descripcion: "Elegante suite con sala de estar y jacuzzi",
      numCamas: 1,
      numBanos: 2,
      precio: 500
    },
    {
      id: 3,
      nombre: "Habitación Estándar",
      descripcion: "Cómoda habitación con todas las comodidades",
      numCamas: 1,
      numBanos: 1,
      precio: 150
    }
  ];
  

  constructor(private formBuilder: FormBuilder) {
  this.habitacionForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    numCamas: ['', Validators.required],
    numBanos: ['', Validators.required],
    precio: ['', Validators.required]
  });
}

  ngOnInit(){

    this.currentSection = 'reservas';
  }

  registrarHabitacion(): void {
    if (this.habitacionForm.valid) {
      this.datosHabitacion = this.habitacionForm.value;
      this.enviar = true;
      this.habitacionForm.reset();
    }
  }

  formularioValido (): boolean {
    return this.habitacionForm.valid ? true : false;
  }

  editarHabitacion(id: number): void {
    // Lógica para editar la habitación con el ID especificado
    console.log('Editar habitación con ID:', id);
  }

  eliminarHabitacion(id: number): void {
    // Lógica para eliminar la habitación con el ID especificado
    console.log('Eliminar habitación con ID:', id);
  }

  navigateToSection(section: string) {
    this.currentSection = section;
  }
}
