import React from 'react';
import './form.css';

const Form = props => {
    return (
        <div className='cont'>
            <label htmlFor='name'>
                <p>Name</p>
                <input type='text' name='name'/>
            </label>
            <label htmlFor='email'>
                <p>Email</p>
                <input type='text' name='email'/>
            </label>
            <label htmlFor='password'>
                <p>Password</p>
                <input type='text' name='password'/>
            </label>
            <div>
                <label htmlFor='terms'>
                    <input type='checkbox' name='terms'/> accept terms and conditions.
                </label>
            </div>
            <button type='submit'>Submit</button>
 
            
        </div> 
    )
}

export default Form;