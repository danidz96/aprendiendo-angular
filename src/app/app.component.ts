import { Component } from '@angular/core';
import { Configuracion } from './models/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;
  public config;

  constructor(){
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion;
  }

  ocultarVideojuegos(value){
    this.mostrar_videojuegos =  value;
  }
}
