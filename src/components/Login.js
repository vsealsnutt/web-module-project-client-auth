import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = () => {
    const { push } = useHistory();

    const [credentials, setCredentials] = useState({
        username:'',
        password:''
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/login', credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                push('/friends');
            })
            .catch(err => console.log(err));
    };

    return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username:</label>
                <input id='username' name='username' onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' onChange={handleChange}/>
            </div>

            <button>Submit</button>
        </form>
    </div>
    )
}

export default Login;