import React, { Component } from 'react';

class Coupon extends Component {
    render() {
        return(
            <div className="col col-sm-6 col-lg-4 mt-2 mx-auto">
                <div className="card">
                    <div className="card-body m-3">
                        <span className="mr-2">Coupon Code :</span>
                        <span className="mr-2">
                            {this.props.getCoupon()}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Coupon;