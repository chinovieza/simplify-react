import React, {Component} from 'react';

class Child extends Component {

    state = {
        name: "Monkey D. Luffy",
        status: true
    };

    componentWillMount() {
        console.log("-> componentWillMount()");
    }

    render() {
        console.log("-> render()", this.props);
        return (
            <div>
                Hello, This is the Child!!!
                <button onClick={this.userClick}>Change State</button>
            </div>
        )
    }

    componentDidMount() {
        console.log("-> componentDidMount()");
    }

    componentWillUpdate() {
        console.log("-> componentWillUpdate()");
    }

    componentDidUpdate() {
        console.log("-> componentDidUpdate()")
    }

    componentWillReceiveProps() {
        console.log("-> componentWillReceiveProps() : I have got new props!!");
    }

    componentWillUnmount() {
        console.log("-> componentWillUnmount() : Unmout LifeCycle Component!!!");
    }

    userClick = () => {
        this.setState({
            name: "Luffytaro",
            status: false
        })
    }
}

export default Child;