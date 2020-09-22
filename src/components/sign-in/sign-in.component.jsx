import React, {useState, useEffect} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

const SignIn = () => {
    // //const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [formData, setFormData] = useState({
        email: '', 
        password: ''
    })

    const handleSubmit = event => {
        event.preventDefault();

        // setEmail('');
        // setPassword('');
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))

        console.log(formData.email, formData.password);
    }
    
    return(
        <div className='sign-in'>

            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    type="email" 
                    name='email' 
                    value={formData.email} 
                    handleChange={handleChange}
                    label='email'
                    required />
                
                <FormInput
                    type='password' 
                    name='password' 
                    value={formData.password} 
                    handleChange={handleChange}
                    label='password'
                    required />
                

                <CustomButton type="submit">SignIn</CustomButton>
            </form>
        </div>
    )
}

export default SignIn;