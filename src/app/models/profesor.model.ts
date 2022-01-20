export class Profesor{
    nombres: string;
    apellidoP: string;
    apellidoM: string;
    correoProfesor: string;
    password: string;
    nivel: number;
    idCarrera: number;
    grado: string;
    idTipoProfesor: number;
    constructor() {
        this.nombres = '';
        this.apellidoP = '';
        this.apellidoM = '';
        this.correoProfesor = '';
        this.password = '';
        this.nivel = 0;
        this.idCarrera = 0;
        this.grado = '';
        this.idTipoProfesor = 0;
    }
}