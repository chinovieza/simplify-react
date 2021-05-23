import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    state = {
        data: false
    }

    toggleHandler = () => {
        const newData = !this.state.data;
        this.setState({
            data: newData
        });
    }

    render() {
        return(
            <div className="col-4 mx-auto mt-5">
                <div className="card">
                    <div className="card-header text-right">
                        <button type="button" className="btn btn-success btn-sm" onClick={this.toggleHandler}>
                            {this.state.data ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    {
                        this.state.data
                        ? <div className="card-body p-5 text-center"><div>Hello World!</div></div>
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default App;