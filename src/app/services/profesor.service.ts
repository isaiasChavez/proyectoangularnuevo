import { Injectable } from '@angular/core';
import { Profesor } from '../models/profesor.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http: HttpClient) { }

  guardarProfesor(profesor: Profesor) {
    return this.http.post(`${environment.API_URI}/profesores/create`, profesor);
  }
}
