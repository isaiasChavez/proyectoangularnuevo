export class Periodo{
    nombrePeriodo: string;
    inicio: Date;
    fin: Date;
    actual:number;
    avance1:string;
    avance2:string;
    avance3:string;
    avanceFinal:String;
    nombreMateria: string;
    constructor() {
        this.nombrePeriodo='';
        this.inicio=new Date();
        this.fin=new Date();
        this.actual=0;
        this.avance1='';
        this.avance2='';
        this.avance3='';
        this.avanceFinal='';
        this.nombreMateria='';

    }
}