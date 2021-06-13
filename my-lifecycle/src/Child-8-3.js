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
                <button onClick={this.userClick}>
                    State Change!!!
                </button>
                <button onClick={this.props.counterFN}>
                    Props Change!!!
                </button>
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

    userClick = () => {
        this.setState({
            name: "Luffytaro",
            status: false
        })
    }
}

export default Child;