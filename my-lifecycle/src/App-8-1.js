import React, {Component} from 'react';

class App extends Component {

  //1. รับค่า default props
  //2. กำหนดค่าเริ่มต้นให้กับ state

  state = {
    name: "ค่าเริ่มต้นให้ state"
  };

  //3. ก่อน render
  componentWillMount() {
    console.log("3. ก่อน render -> componentWillMount()");
  }

  //4. ขณะ render
  render() {
    console.log("4. ขณะ render -> render()", this.props);
    return (
      <div>
        {this.state.name}
      </div>
    )
  }

  //5. หลังจาก render เสร็จแล้ว
  componentDidMount() {
    console.log("5. หลังจาก render แล้ว -> componentDidMount()");
  }

}

export default App;