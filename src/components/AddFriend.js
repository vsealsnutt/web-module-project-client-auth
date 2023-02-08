import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

import '../../src/App.css';

const AddFriend = () => {
    const { push } = useHistory();

    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        axiosWithAuth().post('/friends', form)
            .then(res => {
                push('/friends');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Add Friend</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' name='name' onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='age'>Age:</label>
                    <input id='age' name='age' onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' name='email' onChange={handleChange}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend;