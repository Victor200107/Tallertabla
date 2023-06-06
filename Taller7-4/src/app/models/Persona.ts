export class Persona {
    cedula: number;
    nombre: string;
    apellido: string;
    asignatura: string;
    nota1: number;
    nota2: number;
    promedio: number;
    edad: number;
    estado: string;



    constructor(cedula: number, nombre: string, apellido: string, edad: number,asignatura: string, nota1:number ,nota2:number ,promedio:number, estado:string) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.asignatura = asignatura;
        this.edad = edad;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.promedio = promedio;
        this.estado = estado;

    }
}
