import React, {Component} from 'react';

class App extends Component {

    state = {
        status: true
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.status === nextState.status) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        console.log('Current state is : ' + this.state.status);
        return(
            <div>
                <button onClick={this.clickHandler}>Change State</button>
                <hr/>
                {
                    this.showHide()
                }
            </div>
        )
    }

    checkCondition = () => {
        return this.state.status
    }

    showHide = () => {
        return (
            this.checkCondition() ? <div>Show</div> : <div>Hide</div>
        )
    }

    clickHandler = () => {
        this.setState({
            status: false
        });
    }
}

export default App;