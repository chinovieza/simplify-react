import React from 'react';
import PostId from './Post-id';
import Posts from './Posts';
import Home from './Home';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Error404 from './Error404'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><NavLink to="/" activeStyle={{color:"green"}}>Home</NavLink></li>
                    <li><NavLink to="/posts" activeStyle={{color:"green"}}>All Posts</NavLink></li>
                    <li><NavLink to="/post/1" activeStyle={{color:"green"}}>Post #1</NavLink></li>
                    <li><NavLink to="/post/2" activeStyle={{color:"green"}}>Post #2</NavLink></li>
                    <li><NavLink to="/post/3" activeStyle={{color:"green"}}>Post #3</NavLink></li>
                    <li><NavLink to="/post/4" activeStyle={{color:"green"}}>Post #4</NavLink></li>
                    <li><NavLink to="/post/5" activeStyle={{color:"green"}}>Post #5 Test Redirect</NavLink></li>
                </ul>
                <Switch>
                    <Route path="/post/:id" component={PostId} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/" exact component={Home} />
                    <Route component={Error404} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;