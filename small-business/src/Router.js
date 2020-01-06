
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Bars from './components/Bars'
import Bar from './components/Bar'
import Login from './components/Login'
import Add from './components/AddBar'
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
      <Route exact path="/" component={Bars}/>
      <Route path="/bar/:id" component={Bar}/>
      <Route path="/login" component={Login}/>
      <ProtectedRoute path="/add" component={Add}/>
    </Switch>
  );
};

export default Router;