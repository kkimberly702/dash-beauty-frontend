import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'

function Login () {
    const [loginData, setLoginData] = useState({
        email: '',
        password:''
    });

    const { email, password } = loginData;

    const onChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        loginData(email, password);
    };

    // if (isAuthenticated)
    //     return <Link  to='/' />
    
    return (
        <div>
<h1>Sign In</h1>
<form onSubmit={e => onSubmit(e)}>
    <label> Email Address: 
           <input type="email" name="email" value={email} onChange={e => onChange(e)} required/>
        </label>

    <p><label> Password:
            <input type="password" name="password" value={password} onChange={e => onChange(e)} minLength={6}/>
        </label></p>

        <button>Sign In</button>
    <p>Don't have an Account? <Link to="/Sign-Up">Sign Up</Link></p>

</form>
        </div>
    )

}

export default Login;