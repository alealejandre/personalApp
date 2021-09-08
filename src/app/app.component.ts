import { Component, OnInit,AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
 
 
  title = 'angular-app';
  usuario:any;
  lista_roles:any[]
  @ViewChild("div_body", {static:true}) body:ElementRef;

  constructor(elementRef:ElementRef){
    this.body = elementRef;
    this.lista_roles=[]
        this.addRol("Administrador");
        this.addRol("Certificador");
        this.addRol("Operador");
        this.addRol("Cliente");
        console.log("this.listaRoles", this.lista_roles)
    
  this.usuario ={
        nombre:'Ale',
        apellido:'Alejandre',
        nacionalidad:'Mexicana',
    };
    
    let usuario_temp=JSON.parse(JSON.stringify(this.usuario));
    console.log('Constructor', this.usuario);
    
  }
  ngOnInit(){
    this.usuario.nombre='Alexis';
    console.log('OnInit', this.usuario);
  }

  ngAfterViewInit(){
    this.usuario.nombre='Aalejandre';
    console.log('AfterViewInit', this.usuario);
  }

  ngOnDestroy(){
    console.log('OnDestroy', this.usuario);
  }
  
  imprimirUsuario(){
    alert(this.usuario.nombre)
  }
  addRol(rol:String){
    this.lista_roles.push(rol);
  }
  recibirUsuario(usuario:any){
      console.log(usuario)
  }
}
