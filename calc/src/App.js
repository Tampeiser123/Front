import React from 'react'
import './style.css'
import buttons from "./buttons";
import { evaluate } from 'mathjs';



export default function All(){
    return(
    <div className='Parent'>
        <input className='Input' id='rezult' defaultValue={0} />

        <div>

            {buttons.numbers.map(item => (<button className='button'
            onClick={() => {cons_out(item.val)}}
            >{item.val}</button>))}

            {buttons.equ.map(item => (<button className='button_equil'
            onClick={() => {mobility(item.val)}}
            >{item.val}</button>))}

             {buttons.minus.map(item => (<button className='button_minus'
            onClick={() => {cons_out(item.val)}}
            >{item.val}</button>))}

            {buttons.plus.map(item => (<button className='button_plus'
            onClick={() => {cons_out(item.val)}}
            >{item.val}</button>))} 

            {buttons.zero.map(item => (<button className='button_0'
            onClick={() => {cons_out(item.val)}}
            >{item.val}</button>))} 

            {buttons.dot.map(item => (<button className='button_dot'
            onClick={() => {cons_out(item.val)}}
            >{item.val}</button>))}                
        </div>


    </div>
    
    )
}

function cons_out(value) {
    const inputElement = document.querySelector('#rezult');

    if (inputElement.value === '0') {inputElement.value = ''}

    inputElement.value += value

    if (value === 'C'){
         inputElement.value = '0'
        
        }
}

function mobility(value) {
    const inputElement = document.querySelector('#rezult');
    if (value === '='){
        inputElement.value = evaluate(inputElement.value)
    }
}