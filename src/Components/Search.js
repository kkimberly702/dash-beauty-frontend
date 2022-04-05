import React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Login from './Form';

function SignIn () {
    
    const [makeupItem, setMakeupItem] = useState([])
    useEffect(() => {
    fetch('http://localhost:8000/items/')
    .then((response) => response.json())
    .then((data) => setMakeupItem(data))
    .catch((error) => console.log(error));

    }, [])

    console.log(makeupItem);



    return (
        <div>
        
        <SearchBar/>
        

        </div>
    )
}


export default SignIn;