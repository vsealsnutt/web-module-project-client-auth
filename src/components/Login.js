import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const { push } = useHistory();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };
    console.log(credentials);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login')
            .then(res => {
                localStorage.setItem('token', res.payload);
                push('/friends');
            })
            .catch(err => console.error(err));
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