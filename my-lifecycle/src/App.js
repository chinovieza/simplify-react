import React, {Component} from 'react';

class App extends Component {

  state = {
    name: "Monkey D. Luffy"
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

  userClick = () => {
      this.setState({
          name: "Luffytaro"
      })
  }

}

export default App;