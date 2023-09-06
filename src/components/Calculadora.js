import React, { useState } from 'react';
import './styleComponents/Body';
import { Body, ConteinerCalculator } from './styleComponents/Body';
import { View, Val } from './styleComponents/View';
import { Conteiner, ButtonNum, ButtonsOper, ButtonEqu } from './styleComponents/Buttons';


    function Calculadora() {
        const [value, setValue] = useState('');

        const handleButtonClick = (newValue) => {
            setValue((prevValue) => prevValue + newValue);
        };
        const operaotor = ()=>{
            // eslint-disable-next-line no-eval
            const resultado = eval(value)
            setValue(resultado.toString())
    }
    return ( 
        <>
            <ConteinerCalculator>
            <Body>
                <View>
                    <Val>{value}</Val>
                </View>
                <Conteiner>
                    <ButtonsOper value={'('} onClick={() => handleButtonClick('(')}>(</ButtonsOper>
                    <ButtonsOper value={')'} onClick={() => handleButtonClick(')')}>)</ButtonsOper>
                    <ButtonsOper value={'%'} onClick={() => handleButtonClick('%')}>%</ButtonsOper>
                    <ButtonsOper value={'AC'} onClick={() => setValue('')}>AC</ButtonsOper>
                    <ButtonNum value={'1'} onClick={() => handleButtonClick('1')}>1</ButtonNum>
                    <ButtonNum value={'2'} onClick={() => handleButtonClick('2')}>2</ButtonNum>
                    <ButtonNum value={'3'} onClick={() => handleButtonClick('3')}>3</ButtonNum>
                    <ButtonsOper value={'/'} onClick={() => handleButtonClick('/')}>/</ButtonsOper>
                    <ButtonNum value={'4'} onClick={() => handleButtonClick('4')}>4</ButtonNum>
                    <ButtonNum value={'5'} onClick={() => handleButtonClick('5')}>5</ButtonNum>
                    <ButtonNum value={'6'} onClick={() => handleButtonClick('6')}>6</ButtonNum>
                    <ButtonsOper value={'*'} onClick={() => handleButtonClick('*')}>x</ButtonsOper>
                    <ButtonNum value={'7'} onClick={() => handleButtonClick('7')}>7</ButtonNum>
                    <ButtonNum value={'8'} onClick={() => handleButtonClick('8')}>8</ButtonNum>
                    <ButtonNum value={'9'} onClick={() => handleButtonClick('9')}>9</ButtonNum>
                    <ButtonsOper value={'-'} onClick={() => handleButtonClick('-')}>-</ButtonsOper>
                    <ButtonNum value={'0'} onClick={() => handleButtonClick('0')}>0</ButtonNum>
                    <ButtonNum value={'.'} onClick={() => handleButtonClick('.')}>.</ButtonNum>
                    <ButtonEqu value={'='} onClick={ operaotor }>=</ButtonEqu>
                    <ButtonsOper value={'+'} onClick={() => handleButtonClick('+')}>+</ButtonsOper>
                </Conteiner>
            </Body>
        </ConteinerCalculator>
        </> 
     );
}

export { Calculadora };