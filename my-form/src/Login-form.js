import React, { Component } from 'react';

class LoginForm extends Component {

    state = {
        username: '',
        password: ''
    }

    onInputChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });

        console.log(this.state);

    }

    onLoginSubmit = (event) => {
        
        event.preventDefault();
        console.log(this.state);

    }

    render() {
        return (
            <div className="col-6 mt-5 mx-auto card">
                <div className="card-body">
                    <form onSubmit={this.onLoginSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control is-valid" id="username" name="username" onChange={this.onInputChange} />
                            <div className="valid-feedback">พบชื่อผู้ใช้</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control is-invalid" id="password" name="password" onChange={this.onInputChange} />
                            <div className="invalid-feedback">รหัสผ่านสั้นเกินไป</div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary my-1">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;