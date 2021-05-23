import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Coupon from './Coupon';

class App extends Component {

    state = {
        coupon1: {
            secretWord: 'asdfghjkl;',
            status: true
        },
        coupon2: {
            secretWord: 'qwertyuiop;',
            status: true
        }
    }

    useCoupon = (name) => {
        const updatedCoupon = {...this.state};
        updatedCoupon[name].status = false;
        this.setState(updatedCoupon);
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <Coupon data={this.state['coupon1']} setCoupon={this.useCoupon.bind(this, 'coupon1')} />
                    <Coupon data={this.state['coupon2']} setCoupon={this.useCoupon.bind(this, 'coupon2')} />
                </div>
            </div>
        )
    }
}

export default App;