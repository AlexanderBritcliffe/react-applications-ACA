import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import '../App.css'

import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";



const Nav = (props) => {
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

const handleLogout = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=false;max-age=60*1000"
    window.location.replace("/")
  }

  return (
    <AppBar position="relative">
      <Toolbar style={{backgroundColor: 'purple'}}>
      <Typography variant="h6" style={{ flexGrow: "1",
       fontFamily: 'comic-sans', fontSize: '2em' }}>
        Local Alexandria, Virginia Bars
      </Typography>
        <ul className="nav-list"  
         style={{ display: 'flex', flexDirection: 'column', paddingBottom: '10px',
          listStyle: 'none', fontFamily: 'comic-sans',}}>
          <li className="nav-list-item" style={{ border: '2px black solid',
           padding: '6px', paddingRight: '30px', paddingLeft: '30px', marginBottom: '10px' }}>
            <Link to="/" style={navStyle}>Bars</Link>
          </li>
          {document.cookie == "loggedIn=true" ? (
            <>
          <li className="nav-list-item" style={{ border: '2px black solid',
               padding: '6px', paddingRight: '30px', paddingLeft: '30px', marginBottom: '10px'}}>
                <Link to="/add" style={navStyle}>Add</Link>
          </li>
          <li className="nav-list-item"
                style={{ border: '2px black solid',
                 padding: '6px', paddingRight: '30px', paddingLeft: '30px' }}
                onClick={handleLogout}>
                <Link to="/" style={navStyle}>Logout</Link>
          </li>
            </>
          ):(
          <li className="nav-list-item" style={{ border: '2px black solid', padding: '6px', paddingRight: '30px', paddingLeft: '30px'}}>
              <Link to="/login" style={navStyle}>Login</Link>
          </li>
          )}
        </ul>
      </Toolbar>
    </AppBar>
  )
}


const mapStateToProps = state => ({
    user: state.user
  });

export default withRouter(connect(mapStateToProps, null)(Nav));

