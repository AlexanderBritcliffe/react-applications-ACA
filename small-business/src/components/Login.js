
import React, { Component } from 'react'
import {
  TextField,
  Button,
} from '@material-ui/core'

import { connect } from 'react-redux'

import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleTextChange = (e) => {
    const newState = { ...this.state }
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }

  handleLogin = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=true;max-age=60*1000"
    window.location.replace("/")
  }

  render(props) {
    return (
      <div>
        <form 
        style={{ display: 'flex', flexDirection: 'column', width: '450px',  margin: '5% 30% 0' }}
        onSubmit={this.handleLogin} className="signin-form">
          <TextField
            variant="outlined"
            margin="normal"
           
            
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={this.handleTextChange} 
          />
          <TextField 
            variant="outlined"
            margin="normal"
           
            
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.handleTextChange} 
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >Sign In</Button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user
  };
};


export default withRouter(connect(mapStateToProps, null)(Login));

