import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Child from './Child';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/child">Child</Link></li>
                </ul>
                <Route path="/child" component={Child} />
            </div>
        </BrowserRouter>
    )
}

export default App;