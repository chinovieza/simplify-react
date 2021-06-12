import React from 'react';
import PostId from './Post-id';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><NavLink to="/post/1" activeStyle={{color:"green"}}>Post #1</NavLink></li>
                    <li><NavLink to="/post/2" activeStyle={{color:"green"}}>Post #2</NavLink></li>
                    <li><NavLink to="/post/3" activeStyle={{color:"green"}}>Post #3</NavLink></li>
                    <li><NavLink to="/post/4" activeStyle={{color:"green"}}>Post #4</NavLink></li>
                    <li><NavLink to="/post/5" activeStyle={{color:"green"}}>Post #5 Test Redirect</NavLink></li>
                </ul>
                <Route path="/post/:id" component={PostId} />
            </div>
        </BrowserRouter>
    )
}

export default App;