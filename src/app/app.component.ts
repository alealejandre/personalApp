import { Component, OnInit,AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Usuario } from './interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
 
 listaUsuarios:Usuario[]

  constructor(private ngbModal:NgbModal){
    this.listaUsuarios=[]
  }
 
  recibirUsuario(usuario:any){
      this.listaUsuarios.push(usuario);
      console.log(usuario)
  }
  ngOnInit(){

  }
  ngAfterViewInit(){

  }
  ngOnDestroy(){

  }
  mostrarModalNuevoUsuario(modalNuevoUsuario:any){    
    this.ngbModal.open(modalNuevoUsuario, {
      centered:true,
      size:"lg",
      scrollable:true,
      backdrop:'static'
    }).result.then(
      (result)=>{}, 
      (reason)=>{}
    )
  }
}

