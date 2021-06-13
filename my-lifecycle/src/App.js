import React, {Component} from 'react';

class App extends Component {

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
      <div onClick={this.userClick}>
        Hello!, Life Cycle!!! {this.state.name}
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

  shouldComponentUpdate(nextProps, nextState) {
      if (nextState.status === false) {
          return false;
      }
      return true;
  }

  userClick = () => {
      this.setState({
          name: "Luffytaro",
          status: false
      })
  }

}

export default App;