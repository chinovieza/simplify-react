import React, { Component } from 'react';

class Coupon extends Component {

    onCouponUse = (event) => {
        this.props.setCoupon();
    }

    render() {

        const status = this.props.data.status;
        const coupon = this.props.data.secretWord;

        return(
            <div className="col col-sm-6 mt-2 mx-auto">
                <div className="card">
                    <div className="card-header text-center">
                        <button className="btn btn-success btn-sm" disabled={!status} onClick={this.onCouponUse}>Use Coupon</button>
                    </div>
                    <div className="card-body m-3">
                        <span className="mr-2">Coupon Code :</span>
                        <span className="mr-2">
                            { status ? coupon : 'coupon has been used' }
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Coupon;