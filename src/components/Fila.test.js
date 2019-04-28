import { mount } from 'enzyme';
import React from 'react';
import {Celda} from './Celda'
import {Fila} from './Fila'
import './setupTests.js'

describe("Fila", () => {
    function crearFila(){   
        const fila = mount(<Fila index = {5} columnas = {10}/>);
        return fila;
    }

    it("La cantidad de celdas deberia ser 10", () =>{
        const fila = crearFila();
        expect(fila.find(Celda).length).toEqual(10);
    })

    it("El numero de columna deberia ser 1", () =>{
        const fila = crearFila();
        const celda = fila.find(Celda).at(0);
        expect (celda.prop("columna")).toEqual(1);
    })

    it("El numero de fila deberia ser 5", () =>{
        const fila = crearFila();
        const celda = fila.find(Celda).at(0);
        expect (celda.prop("fila")).toEqual(5);
    })

    // Tambien quedaría pendiente ver porque no modifica el state
})