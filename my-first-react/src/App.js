import React, { Component } from 'react'

class App extends Component {
    
    state = {
        id: '1',
        name: 'Monkey D. Luffy'
    }

    render() {
        return (
            <div>
                { this.state.name }
            </div>
        )
    }
    
}

export default App;