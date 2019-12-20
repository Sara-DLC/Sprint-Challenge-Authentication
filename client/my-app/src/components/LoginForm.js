import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';


function Userform (props){
  const login = (value, actions) => {
      const user = {
        username: value.username,
        password: value.password,
      }

      axios.post('http://localhost:3300/api/auth/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        actions.resetForm();
        props.history.replace('/jokes')
      })
      .catch(err => {
        alert(err.message)
      })
    }

  const OnSignIn = {username: '', password: ''}
  return(
      <Formik 
      initialValues = {OnSignIn}
      onSubmit={login}
      render={props => {
          return(
              <Form className='form'>
                  <label htmlFor='username'>Username</label>
                  <Field name='username' type='text' placeholder='username'/>
                  <label htmlFor='password'>Password</label>
                  <Field name='password' type='password' placeholder='password'/>
                  <button type='submit'>Log In</button>
              </Form>
          )
      }}/>
  )

}

export default Userform; 
