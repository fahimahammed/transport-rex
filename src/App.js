import './App.css';
import Home from './components/Home/Home';
import TrNavbar from './components/TrNavbar/TrNavbar';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AccountAuth from './components/AccountAuth/AccountAuth';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoMatch from './components/NoMatch/NoMatch';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <div className='App'>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <TrNavbar logUser={loggedInUser}></TrNavbar>
        <Switch>
          <Route path='/home'>
              <Home></Home>
          </Route>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route path='/login_account'>
              <AccountAuth></AccountAuth>
          </Route>
          <PrivateRoute path='/destination/:id'>
              <Destination></Destination>
          </PrivateRoute>
          <Route path='/*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router> 
      </UserContext.Provider>
    </div> 
   
  );
}

export default App;
