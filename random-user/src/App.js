import React from 'react';
import UsersList from './UsersList'
import { Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path = "/" component={UsersList}/>
    </div>
  );
}

export default App;