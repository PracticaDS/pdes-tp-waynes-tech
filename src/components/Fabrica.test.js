import { shallow } from 'enzyme';
import React from 'react';
import {Fabrica} from './Fabrica'
import {Fila} from './Fila'
import './setupTests.js'

describe("Fabrica", () => {
    function crearFabrica(){
        
        const fabrica = shallow(<Fabrica filas = {6} columnas= {8}/>);
        return fabrica;
    }

    it("La cantidad de filas deberia ser 6", () =>{
        const fabrica = crearFabrica();
        expect (fabrica.find(Fila).length).toEqual(6);

    })
})

/*
describe('<Fabrica />', () => {
    it('se monta como corresponde', () => {
       let wrapper = shallow(<Fabrica />)
  
        expect(wrapper.find('.grilla')).toHaveLength(1)
    })
  
    it('tiene 100 celdas', () => {
       let wrapper = shallow(<Fabrica />)
  
        expect(wrapper.find(Fila)).toHaveLength(100)
    })
    
  })
  */