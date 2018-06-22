import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
      this.titulo = 'Componente de videojuego';
      this.listado = 'Listado de juegos';
      
      //console.log('Se ha cargado videojuego');
    }

    ngOnInit(): void {
        //console.log('OnInit ejecutado');
    }

    ngDoCheck() {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        //console.log('DoCheck ejecutado');
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        //console.log('OnDestroy ejecutado');
    }

    cambiarTitulo(){
        //this.titulo = 'Nuevo titulo';
    }
}