import { Component, OnInit } from '@angular/core';
import { ProfesorYMateria } from 'src/app/models/profesorYMateria.model';
@Component({
  selector: 'app-profesor-ymateria',
  templateUrl: './profesor-ymateria.component.html',
  styleUrls: ['./profesor-ymateria.component.css']
})
export class ProfesorYMateriaComponent implements OnInit {
  profesorYMateria:ProfesorYMateria;
  constructor() { 
    this.profesorYMateria=new ProfesorYMateria();
  }

  ngOnInit(): void {
  }

}
