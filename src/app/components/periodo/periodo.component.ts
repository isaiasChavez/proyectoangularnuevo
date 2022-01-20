import { Component, OnInit } from '@angular/core';
import { Periodo } from 'src/app/models/periodo.model';
@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css']
})
export class PeriodoComponent implements OnInit {
  periodo:Periodo;
  constructor() { 
    this.periodo=new Periodo();
  }

  ngOnInit(): void {
  }

}
