import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentLists from './Student-lists'

class App extends Component {
    render() {
        return(
            <div className="container">
                <StudentLists />
            </div>
        )
    }
}

export default App;