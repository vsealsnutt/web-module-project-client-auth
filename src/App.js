import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className='link' to='/login'>Login</Link>
          <Link className='link' to='/friends'>Friend List</Link>
          <Link className='link' to='/friends/add'>Add Friend</Link>
          <Link className='link' to='/logout'>Logout</Link>
        </header>

        <Route exact path='/'>
          <Login/>
        </Route>

        <Route exact path='/login'>
          <Redirect to='/'/>
        </Route>

        <Route exact path='/friends'>
          <FriendsList/>
        </Route>

        <Route exact path='/friends/add'>
          <AddFriend/>
        </Route>

        <Route exact path='/logout'>
          <Logout/>
        </Route>

      </div>
    </Router>
  );
}

export default App;
