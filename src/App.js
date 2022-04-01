import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from "./Screens/HomeScreen";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Screens/Login';
import axios from './axios';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';
import ProfileScreen from "./Screens/ProfileScreen";
function App({t}) {
  const user = useSelector(selectUser);
  user ? console.log(user) : console.log('no user');
  const dispatch = useDispatch();
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token","");
        token = "";
      }
      const tokenRes = await axios.post('/users/tokenIsValid', null, {headers: {"x-auth-token":token}});
      if (tokenRes.data) {
        const userRes = await axios.get("/users/", {headers:{"x-auth-token":token}});
        dispatch(login(userRes.data));
      } else {
        dispatch(logout());
     }
    }
    checkLoggedIn();
  }, [user])

  return (
    <div className="App">
      <Router>
        {
          !user ? (
            <Login/>
          ) : (
          <Switch>
            <Route path="/profile">
                <ProfileScreen/>
            </Route>
            <Route exact path="/">
              <HomeScreen/>
            </Route>
          </Switch>
          )
        }
      </Router>
    </div>
  );
}

export default App;
