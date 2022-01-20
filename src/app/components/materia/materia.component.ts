import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/models/materia.model';
@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {
  materia:Materia;
  constructor() {
    this.materia=new Materia();
   }

  ngOnInit(): void {
  }

}
