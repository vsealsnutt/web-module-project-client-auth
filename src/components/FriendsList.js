import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import '../../src/App.css';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Friends List</h1>
            <ul>
                {
                    friends.map(friend => {
                        return <li>{friend.name} - {friend.age} - {friend.email}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default FriendsList;