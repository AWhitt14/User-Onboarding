import React, { useState, useEffect } from 'react';
import './form.css';
import * as yup from 'yup';
import axios from 'axios';
import Input from './Inputs';


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
     password: yup.string().min(8).required('please provide a password of at least 8 characters'),
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

    const submitForm = (e) => {
        e.preventDefault();
        axios.post(`https://reqres.in/api/users`,newPerson)
        .then(() => {
            console.log('form submitted')
            }
        )
        .catch(er => {
            console.log('there was an error',er);
        })
    }

    useEffect(() => {
        personSchema.isValid(newPerson).then(valid => buttonTog(!valid));
    }, [newPerson])

    return (
      <div>
        <h1>Bamboozled University</h1>
        <form onSubmit={submitForm} className='cont'>
            <h2>Create Account</h2>
            
            <Input type='text' label='Name' name='name' value={newPerson.name} onChange={change} errors={errors}/>
            
            <Input type='text' label='Email' name='email' value={newPerson.email} onChange={change} errors={errors}/>
            
            <Input type='text' label='Password' name='password' value={newPerson.password} onChange={change} errors={errors}/>

            <div>
                <label htmlFor='terms'>
                    <input type='checkbox' data-cy='term' name='terms' onChange={change}/> accept terms and conditions.
                </label>
            </div>
            <button data-cy='submit' disabled={buttonOff} type='submit'>Submit</button>
        </form> 
      </div>
    )
}

export default Form;