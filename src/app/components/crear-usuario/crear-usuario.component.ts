import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
nuevoUsuario:Usuario;
@Output() public setUsuario:EventEmitter<any> = new EventEmitter();
  
  constructor() { 
        /*this.nuevoUsuario = {
                    nombre:'Alexis', 
                    appPaterno:'Alejandre', 
                    appMaterno:'Alberto', 
                    edad:40,
                    activo:true,
                    feReg:new Date()
                  }*/
                  this.nuevoUsuario ={}

  }

  ngOnInit(): void {
  }

  registrarUsuario(){
    let usuarioRegistro:Usuario = this.nuevoUsuario
    usuarioRegistro.feReg = new Date();
    usuarioRegistro.activo = true;
    this.setUsuario.emit(this.nuevoUsuario)
    alert("Usuario registrado")
  }
  limpiarCampos(){
    this.nuevoUsuario={}
  }

}
