import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Coupon from './Coupon';

class App extends Component {

    secretWord = 'asdlkfjasdfjasldfjasdflj';

    sharedHandler = () => {
        return this.secretWord;
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <Coupon getCoupon={this.sharedHandler} />
                </div>
            </div>
        )
    }
}

export default App;