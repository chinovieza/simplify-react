import React, {Component} from 'react';
import Child from './Child';

class App extends Component {
    
    state = {
        counter: 1
    }

    plusCounter() {
        this.setState({
            counter: this.counter + 1
        })
        return this.state.counter;
    }

    render() {
        return (
            <div>
                <Child counterFN={this.plusCounter.bind(this)} />
            </div>
        )
    }
}

export default App;