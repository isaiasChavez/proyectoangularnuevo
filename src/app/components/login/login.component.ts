import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/login.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Profesor} from './../../models/profesor.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:Usuario;
  idProfesor:number=0;
  constructor(private usuarioService: UsuarioService,private router:Router) {
    this.usuario=new Usuario();
   }

  ngOnInit(): void {
  }
  logueo()
  {
    this.usuarioService.existe(this.usuario.correo, this.usuario.password).subscribe((resUsuario:any) =>
    {
      console.log(resUsuario);
      if(resUsuario >0)
      {
        this.idProfesor=resUsuario;
        localStorage.setItem('idProfesor',this.idProfesor+'');
        this.router.navigateByUrl('/home/generales/'+this.idProfesor);
      }
    },
    err => console.error(err)
    );
  }

}
