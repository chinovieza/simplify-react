import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    React.createElement(
      'div',
      {className: 'App'},
      React.createElement('p', null, 'Hello World from App Component by React.createElement')
    )
  );
}

export default App;
