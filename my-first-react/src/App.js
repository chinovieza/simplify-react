import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

    const [dataState, setDataState] = useState({
        home: '#home',
        products: '#products',
        profile: '#profile'
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mx-auto">
                    <a className="nav-item nav-link" href={dataState.home}>Home</a>
                    <a className="nav-item nav-link" href={dataState.products}>Products</a>
                    <a className="nav-item nav-link" href={dataState.profile}>Profile</a>
                </div>
            </div>
        </nav>
    );
}

export default App;