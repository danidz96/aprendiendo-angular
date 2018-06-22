import { Injectable } from '@angular/core';
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    contructor(){
        this.zapatillas = [
            new Zapatilla('Reebok Classic', 'Reebok', 80, 'Blanco', false),
            new Zapatilla('Nike Runner', 'Nike', 90, 'Blanco', true),
            new Zapatilla('Adidas Stan Smith', 'Adidas', 97, 'Blanco', true),
            new Zapatilla('Adidas Cloudfoam', 'Adidas', 65, 'Negro', true)
        ];
    }

    getTexto() {
        return 'Hola mundo desde un servicio';
    }
    
    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas
    }

}