import React, { useState, useEffect, Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Homepage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'; 
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}


function App (){
  const [currentUser, setCurrentUser] = useState({
    
    currentUser: null
  });
  const [showSignIn, setShowSignIn] = useState(true);

  //let showSignIn = true;

  let unsubscribeFromAuth = null;

  useEffect(() =>{
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
      
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
        console.log(currentUser)
      
      }
      setCurrentUser({currentUser: userAuth});
      
      //setCurrentUser({currentUser: u})
      // console.log(user);
    })

    return () => {
      console.log(currentUser);
      unsubscribeFromAuth();
    }
  },[])

  return (
  
    <div>
      <Header currentUser={currentUser} showSignIn={showSignIn}/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  
  );
  
}

export default App;
