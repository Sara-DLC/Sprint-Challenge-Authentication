import React from 'react';
import { Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import UserForm from './components/LoginForm';



function App() {
 
  return (
    <div className="App">
        <div className="App">
      <Route exact path ='/' component={UserForm}/>
      <Route exact path ="/register" component={RegisterForm}/>
        </div>
    
    </div>
  
  );
}

export default App;




