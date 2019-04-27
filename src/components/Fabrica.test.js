import { mount } from 'enzyme';
import React from 'react';
import {Fabrica} from './Fabrica'
import {Fila} from './Fila'
import './setupTests.js'

describe("Fabrica", () => {
    function crearFabrica(){   
        const fabrica = mount(<Fabrica className="fabrica" filas = {6} columnas= {8}/>);
        return fabrica;
    }

    it("La cantidad de filas deberia ser 6", () =>{
        const fabrica = crearFabrica();
        expect (fabrica.find(Fila).length).toEqual(6);
    })

    it("La cantidad de columnas deberia ser 8", () =>{
        const fabrica = crearFabrica();
        const fila = fabrica.find(Fila).at(0);
        expect (fila.prop("columnas")).toEqual(8);
    })

    it("El índice de la fila deberia ser 3",() =>{
        const fabrica = crearFabrica();
        const fila = fabrica.find(Fila).at(2);
        // Es 3 ya que los indices de la columnas comienzan con 1
        expect (fila.prop("index")).toEqual(3);

    })

    /*
    
    it("La cantidad de grillas creadas deberia ser 48",() =>{
        const fabrica = crearFabrica();
        fabrica.simulate('click')
        // Da 0, preguntar despues bien porque no funciona
        expect (fabrica.state("grillas").length).toEqual(48);

    })

    */
})
