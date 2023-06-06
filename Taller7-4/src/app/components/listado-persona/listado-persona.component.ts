import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input } from '@angular/core';
import{Person} from 'src/app/models/Person';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css']
})
export class ListadoPersonaComponent {
  radioButtonSeleccionado = 'Todos';

  listPersona: Person[] = [
    { cedula: '0919922252', nombre: 'Juan', apellido: 'Perez', fechaNacimiento: new Date('11/05/1990'), genero: 'Masculino', estado: true },
    { cedula: '0919922252', nombre: 'Anna', apellido: 'Perez', fechaNacimiento: new Date('11/05/1990'), genero: 'Femenino', estado: true },
    { cedula: '0919922252', nombre: 'Juan', apellido: 'Perez', fechaNacimiento: new Date('11/05/1990'), genero: 'Masculino', estado: false },
    { cedula: '0919922252', nombre: 'Juan', apellido: 'Perez', fechaNacimiento: new Date('11/05/1990'), genero: 'Masculino', estado: true },
    { cedula: '0919922252', nombre: 'Juan', apellido: 'Perez', fechaNacimiento: new Date('11/05/1990'), genero: 'Masculino', estado: true },
  ]



  constructor() {

  }



  obtenerTotalPersonas(): number {
    return this.listPersona.length;
  }

  obtenerTotalMasculino(): number {
    return this.listPersona.filter(list => list.genero ==='Masculino').length;
  }

  obtenerTotalFemenino(): number {
    return this.listPersona.filter(list => list.genero === 'Femenino').length;
  }

}
