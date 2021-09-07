import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
nuevoUsuario:Usuario;
  
  constructor() { 
        this.nuevoUsuario = {
                    nombre:'Alexis', 
                    appPaterno:'Alejandre', 
                    appMaterno:'Alberto', 
                    edad:40}

  }

  ngOnInit(): void {
  }

}
