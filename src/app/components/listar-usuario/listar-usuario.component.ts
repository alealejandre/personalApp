import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
listaUsuarios:Usuario[];
  constructor() { 
        this.listaUsuarios=[]

  }

  ngOnInit(): void {
  }

}
