import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBzh266ychR6oxPaxlau6nC0MWCpkNRmJ8",
    authDomain: "ecommerce-d6924.firebaseapp.com",
    databaseURL: "https://ecommerce-d6924.firebaseio.com",
    projectId: "ecommerce-d6924",
    storageBucket: "ecommerce-d6924.appspot.com",
    messagingSenderId: "669127904497",
    appId: "1:669127904497:web:901ea3d7ee11ceceba6d50",
    measurementId: "G-01ZN5KPSN7"
};

export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if(!userAuth){
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //console.log(snapShot);


    // if snapshot dont exist create user in database
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
    
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
    
        }
        catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;

    

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

