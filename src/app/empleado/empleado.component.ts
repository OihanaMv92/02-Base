import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']

})
export class EmpleadoComponent implements OnInit {

nombre="Juan";
apellido="Diaz";
edad=28;
empresa="Google";

//recibe el parametro
// agregar(value:string){}

// nos permite acceder get es DAME!
// getEdad(){
//   return this.edad;
// }

// Crear propiedad ahora tenemos que crear un puente para el disable tenemos que meter en el html [disabled]="habiliracionCuadro" 

habiliracionCuadro=false;

// esto es hutil si el usuario esta logeado puede rellenar datos si no solo puede verlo sin rellenar [checked]="usuRegistrado" (HTML)
usuRegistrado=false;

getRegistroUsuario(){
  this.usuRegistrado = false;
}

// CREAMOS EL VALOR DEL TEXTO INICIAL 
textoDeRegistro="No hay nadie registrado";

// Cuando haga click el usuario queda registrado en el chekbox
setUsuarioRegistrado(event:Event){ // metemos el objeto evento de la propiedad evento
// alert("El usuario se acaba de registrar!");
// CUANDO HAGA CLICK CAMBIAMOS EL VALOR
// this.textoDeRegistro = "El usuario se acaba de registrar";


//Hacer un casting transformar el objeto del evento a un html. tiene que coincidir la propiedad value
if((<HTMLInputElement>event.target).value=="Si"){
  this.textoDeRegistro = "El usuario se acaba de registrar";
}else{
  this.textoDeRegistro = "No estas registrado";
}
}

  constructor() { }

  ngOnInit(): void {
  }

}
