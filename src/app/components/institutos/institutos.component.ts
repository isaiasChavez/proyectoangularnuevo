import { Component, OnInit } from '@angular/core';
import { Institutos } from 'src/app/models/institutos.model';
@Component({
  selector: 'app-institutos',
  templateUrl: './institutos.component.html',
  styleUrls: ['./institutos.component.css']
})
export class InstitutosComponent implements OnInit {
  institutos:Institutos;
  constructor() {
    this.institutos=new Institutos();
   }

  ngOnInit(): void {
  }

}
