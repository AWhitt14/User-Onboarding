import React, { useState } from 'react';
import './form.css';
import * as yup from 'yup';


const Form = props => {

 const person = {
     name: '',
     email: '',
     password: '',
     terms: false,
 }

 const [ newPerson, setPerson ] = useState(person);
 const [buttonOff, buttonTog] = useState(true);
 const [errors, setErrors ] = useState({ ...person, terms: "" });

 const personSchema = yup.object().shape({
     name: yup.string().required('please fill in name'),
     email: yup.string().email().required('Please provide a valid email'),
     password: yup.string().required('please provide a password of at least 8 characters'),
     terms: yup.boolean().oneOf([true], "Please agree to the terms and conditions")
 });

 const validateField = e => {
    e.persist();
    
    yup
      .reach(personSchema, e.target.name)
      .validate(e.target.value)
      .then(valid =>
        setErrors({
          ...errors,
          [e.target.name]: ""
        })
      )
      .catch(error =>
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0]
        })
      );}

 const change = e => {
        const value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setPerson({
          ...newPerson,
          [e.target.name]: value
        });
        validateField(e);
    };

    return (
        <div className='cont'>
            <label htmlFor='name'>
                <p>Name</p>
                <input type='text' name='name' value={newPerson.name} onChange={change}/>
            </label>
            <label htmlFor='email'>
                <p>Email</p>
                <input type='text' name='email' value={newPerson.email} onChange={change}/>
            </label>
            <label htmlFor='password'>
                <p>Password</p>
                <input type='text' name='password' value={newPerson.password} onChange={change}/>
            </label>
            <div>
                <label htmlFor='terms'>
                    <input type='checkbox' name='terms' onChange={change}/> accept terms and conditions.
                </label>
            </div>
            <button disabled={buttonOff} type='submit'>Submit</button>
 
            
        </div> 
    )
}

export default Form;