import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor.model';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  profesor:Profesor;
  constructor(private profesorService:ProfesorService) {
    this.profesor=new Profesor();
  }

  ngOnInit(): void {
  }
  registro()
  {
    console.log("registro",this.profesor);
    this.profesorService.guardarProfesor(this.profesor).subscribe(
      res => { }, err => console.error(err) );
  }

}
