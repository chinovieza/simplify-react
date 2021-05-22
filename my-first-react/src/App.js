import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    
    state = {
        user: "luffy",
        password: "pirateking",
        address: {
            houseno: "123",
            province: "Foosha Village"
        }
    };

    userClick = () => {
        this.setState({
            user: "monky",
            password: "GomuGomuNoMi"
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 mx-auto mt-5">
                        <div className="card ml-5 mr-5">
                            <div className="card-header text-right">
                                <button className="btn btn-success btn-sm" onClick={this.userClick}>
                                    Click Here !
                                </button>
                            </div>
                            <div className="card-body">
                                user: <span className="ml-2">{this.state.user}</span><br/>
                                password: <span className="ml-2">{this.state.password}</span><br/>
                                house no: <span className="ml-2">{this.state.address.houseno}</span><br/>
                                province: <span className="ml-1">{this.state.address.province}</span><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default App;