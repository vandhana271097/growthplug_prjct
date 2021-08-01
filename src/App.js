import React, { Component } from 'react' ;

import './App.css';
import Facebook from './components/Facebook';

function App() {
  return (
    <div className="App">
      
      <p className="App-intro">
        To get started, authenticate with Facebook.
      </p>
      <Facebook />
    </div>
  );
}

export default App;
