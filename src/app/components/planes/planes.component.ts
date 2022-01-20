import { Component, OnInit } from '@angular/core';
import { Planes } from 'src/app/models/planes.model';
@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  plan:Planes;
  constructor() {
    this.plan=new Planes();
   }

  ngOnInit(): void {
  }

}
