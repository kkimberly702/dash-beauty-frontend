import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

function SignUpForm () {
    const [loginData, setLoginData] = useState({
        email: '',
        password:'',
        password2: ''
    });

    const { email, password, password2 } = loginData;


const onChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
    
        loginData(email, password, password2)};

        // if (password2 !== password2)
        //     setAlert('Passwords do not match', 'error')
        // else
        //     signup({ email, password, password2 })
        return (
                <div>
        <h1>Sign Up</h1>
        <p>Create your Account</p>
        <form onSubmit={e => onSubmit(e)}>
            <label> Email Address: 
                   <input type="email" name="email" value={email} onChange={e => onChange(e)} required/>
                </label>
        
            <label> Password:
                    <input type="password" name="password" value={password} onChange={e => onChange(e)} minLength={6}/>
                    <input type="password" name="password2" placeholder="Confirm Password" value={password2} onChange={e => onChange(e)} minLength={6}/>
                </label>
        
                <button>Sign Up</button>
            <p>Already have an Account? <Link to="Sign-In">Sign In</Link></p>
        
        </form>
                </div>
            )
    };


export default SignUpForm;