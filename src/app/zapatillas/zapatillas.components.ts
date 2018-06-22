import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";


@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.components.html',
    providers: [ZapatillaService]
})

export class ZapatillasComponent  implements OnInit{
    public titulo: String = 'Componente de zapatillas';
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public mi_marca: String;

    constructor(
        private _zapatillaService: ZapatillaService
    ){
        this.mi_marca = 'Le coq Sportive'
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Reebok Classic', 'Reebok', 80, 'Blanco', false),
            new Zapatilla('Nike Runner', 'Nike', 90, 'Blanco', true),
            new Zapatilla('Adidas Stan Smith', 'Adidas', 97, 'Blanco', true),
            new Zapatilla('Adidas Cloudfoam', 'Adidas', 65, 'Negro', true)
        ];
    }

    ngOnInit() {
        /* this.zapatillas = this._zapatillaService.getZapatillas(); */
        /* alert(this._zapatillaService.getTexto()); */
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla) => {
            if (this.marcas.indexOf(zapatilla.marca) < 0) {
                this.marcas.push(zapatilla.marca);
            }
        });
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index){
        this.marcas.splice(index, 1)
    }

    onBlur(){
        console.log('Has saludo del input');        
    }
    mostrarPalabra(){
        alert(this.mi_marca);        
    }
}