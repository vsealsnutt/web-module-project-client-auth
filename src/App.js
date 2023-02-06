import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>

        <Route exact path='/login'>
          <Redirect to='/'/>
        </Route>

        <Route exact path='/friends'>
          <FriendsList/>
        </Route>

        <Route exact path='/friend/add'>
          <AddFriend/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
