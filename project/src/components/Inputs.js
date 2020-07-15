import React from 'react';

const Input = props => {
    const em = props.errors[props.name];
    return (
        <div>
            <label htmlFor={props.label}>
                <p>{props.label}</p>
                <input type={props.type} name={props.name} value={props.vale} onChange={props.onChange}/>
                {em.length !== 0 && <p>{em}</p>}
            </label>
        </div>
   )
}


export default Input;