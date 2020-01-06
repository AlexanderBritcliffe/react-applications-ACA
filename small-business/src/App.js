  
import React, { Component } from 'react';
import Nav from './components/Nav'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store'
import cookie from 'cookie'

function App() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        {console.log(document.cookie)}
          <Nav />
          <Router />
        </BrowserRouter>
      </Provider>
    );
}

export default App;