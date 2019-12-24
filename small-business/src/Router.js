  
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listings from './containers/Listings'
import Listing from './containers/Listing'
import Login from './containers/Login'
import Add from './containers/Add'
import user from './redux/reducers'

const Router = () => {
  const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
  }
  
  const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
  }
  
  return (
    <Switch>
      {console.log(document.cookie)}
      <Route exact path="/" component={Listings}/>
      <Route path="/listing/:id" component={Listing}/>
      <Route path="/login" component={Login}/>
      <ProtectedRoute path="/add" component={Add}/>
    </Switch>
  );
};

export default Router;