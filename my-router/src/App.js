import React from 'react';
import Posts from './Posts';
import Profile from './Profile';
import Home from './Home';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <h2>Route App v.1</h2>
            </div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/posts">All Posts</Link></li>
                    <li><Link to="/profile">User Profile</Link></li>
                </ul>
                <Route path="/posts" component={Posts} />
                <Route path="/profile" component={Profile} />
                <Route path="/home" component={Home} />
                <Route path="/" exact={true} component={Home} />
            </div>
        </BrowserRouter>
    )
}

export default App;