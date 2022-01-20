import { Component, OnInit } from '@angular/core';
import { Carreras } from 'src/app/models/carreras.model';
@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit {
  carreras:Carreras;
  constructor() {
    this.carreras=new Carreras();
   }

  ngOnInit(): void {
  }

}
