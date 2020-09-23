import React, {useState, useEffect} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

const SignUp = () => {

    const [userState, setUserState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async event =>{
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = userState;
        //const displayName = userState.displayName;

        if(password != confirmPassword){
            alert("passwords don't match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
       
            await createUserProfileDocument(user, {displayName});

            setUserState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
       
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        // setUserState({
        //     displayName: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        // })
    },[])

    const handleChange = event =>{
        const {name, value} = event.target;

        //setUserState({[name]: value});

        setUserState(prevState => ({
            ...prevState,
            [name]: value
        }))

        console.log('event data ', name, value)
        console.log('state data ', userState.displayName, userState.email, userState.password, userState.confirmPassword)
    }

    return(
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={userState.displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                
                <FormInput
                    type='email'
                    name='email'
                    value={userState.email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={userState.password}
                    onChange={handleChange}
                    label='password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={userState.confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
                

            </form>
        </div>
    )

}

export default SignUp;