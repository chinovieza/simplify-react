import React, { Component } from 'react';

class LoginForm extends Component {

    render() {
        return (
            <div className="col-6 mt-5 mx-auto card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" name="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" />
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