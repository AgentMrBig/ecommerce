import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Homepage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'; 


const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}


function App (){
  return (
  
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  
  );
  
}

export default App;
