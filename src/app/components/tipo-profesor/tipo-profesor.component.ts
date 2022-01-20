import { Component, OnInit } from '@angular/core';
import { TipoProfesor } from 'src/app/models/tipoProfesor.model';
@Component({
  selector: 'app-tipo-profesor',
  templateUrl: './tipo-profesor.component.html',
  styleUrls: ['./tipo-profesor.component.css']
})
export class TipoProfesorComponent implements OnInit {
  tipoProfesor:TipoProfesor;
  constructor() { 
    this.tipoProfesor=new TipoProfesor();  
  }

  ngOnInit(): void {
  }

}
