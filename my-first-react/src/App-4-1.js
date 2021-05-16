import React from 'react';
import './App.css'

const App = () => {

    const myStyle = {
        color: 'green',
        fontSize: '30px',
        textAlign: 'center'
    }

    return (
        <div className="App">
            <div style={{color:'white', backgroundColor:'blue', fontSize:30}}>Hello Inline Style</div>
            <p style={
                {
                    color:'red',
                    fontSize: 14,
                    textAlign: 'center'
                }
            }>This is the another inline style</p>
            <p style={myStyle} >This is the inline style by variable</p>
            <p className="myStyle2">This is the link style</p>
        </div>
    );
}

export default App;