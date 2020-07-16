import React from 'react';
import './inputs.css';

const Input = props => {
    const em = props.errors[props.name];
    return (
        <div className='boxit'>
            <label htmlFor={props.label}>
                <p>{props.label}</p>
                <input type={props.type} name={props.name} value={props.vale} onChange={props.onChange}/>
            </label>
            {em.length !== 0 && <p className='erros'>{em}</p>}
        </div>
   )
}


export default Input;