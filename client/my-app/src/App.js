import React from 'react';
import { Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import UserForm from './components/LoginForm';
import '../src/App.css';



function App() {
 
  return (
    <div >
      <h1>Jokes</h1>
        <div >
      <Route exact path ='/' component={UserForm}/>
      <Route exact path ="/register" component={RegisterForm}/>
        </div>
    
    </div>
  
  );
}

export default App;




