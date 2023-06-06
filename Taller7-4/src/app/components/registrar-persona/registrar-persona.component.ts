import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/Persona';
import { Router } from '@angular/router';


@Component({
  selector: 'app-persona',
  templateUrl: './registrar-persona.component.html',
  styleUrls: ['./registrar-persona.component.css']
})
export class RegistrarPersonaComponent {
  radioButtonSeleccionado = 'Todos';

  listPersona: Persona[] = [];
  form!: FormGroup;


  agregarPersona() {
    //tomo los datos del formulario
    const persona: Persona = {
      cedula: this.form.value.cedula,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      edad: this.form.value.edad,
      asignatura: this.form.value.asignatura,
      nota1: this.form.value.nota1,
      nota2: this.form.value.nota2,
      promedio: this.form.value.promedio = (this.form.value.nota1 + this.form.value.nota2) / 2,
      estado: this.status(this.form.value.promedio)
    }

    //agrego a la lista
    this.listPersona.push(persona);
    //limpiar el formulario
    this.form.reset();
  }

  /*calcularPromedio() {
    const promedioTotal = this.listPersona.reduce(
      (total, listPersona) => total + listPersona.promedio,
      0
    );
    const promedioFinal = promedioTotal / this.listPersona.length;
    console.log('Promedio de edades:', promedioFinal);

  }

*/



  status(promedio:number):string{
    if(promedio >= 7 && promedio <= 10){
      return "Aprobado"
    }else{
      return "Reprobado"
    }
  }


  constructor(private fb: FormBuilder,private router: Router) {

    this.form = this.fb.group({
      cedula: ['', [Validators.required, Validators.minLength(10)]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      asignatura: ['', Validators.required],
      nota1: ['', Validators.required],
      nota2: ['', Validators.required],
    })
  }

  obtenerPersona(): number{
    return this.listPersona.length;
  }

  ObtenerAprobado(){
    return this.listPersona.filter(list => list.estado == 'Aprobado').length;
  }
  ObtenerReprobado(){
    return this.listPersona.filter(list => list.estado == 'Reprobado').length;
  }

  mostrarTotal(){
    let total=0;
    for(let listPersona of this.listPersona){
      total += listPersona.promedio;

    }
    const promediTotal= total /this.form.value.promedio;

    this.router.navigate(['/totalpromedio', promediTotal]);
  }




}
