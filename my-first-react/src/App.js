import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Post from './Post'
import Comment from './Comment'
import Child1 from './Child1'
import Child2 from './Child2'

function App() {

  const myName = 'Monkey D. Luffy';
  const data01 = 20;
  const data02 = 15;
  const randomNumber = Math.random()
  const myJSX = (
    <p>
      Bounty: 1,500,000,000 Beli
    </p>
  )

  return (
    <div className='App'>
      <p>My name is : { myName }</p>
      <p>Power is : { data01 + data02 }</p>
      { randomNumber < 0.5 ? <div>Win</div> : <div>Lost</div> }
      { myJSX }
      <hr />
      <Post />
      <hr />
      <Comment />
      <hr />
      <div>
        <Child1 />
        <Child2 />
      </div>
    </div>
  );
}

export default App;
