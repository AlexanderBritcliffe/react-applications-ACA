import React, { Component } from 'react'
import {
  AppBar,
  Typography,
  TextField,
  Button
} from '@material-ui/core'

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
      <div className="signin-container">
        <AppBar position="static">
          <Typography>Sign In</Typography>
        </AppBar>
        <form onSubmit={this.handleLogin} className="signin-form">
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
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
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.handleTextChange} 
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >Sign In</Button>
        </form>
      </div>
    )
  }
}

export default Login;