import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import {Link} from 'react-router-dom'

class Step2 extends Component {
  constructor(props,context){
    super(props,context);
    this.state={
      username:"",
  }
}
  render() {
    return (
      <div className="App">
          <div style={{fontSize:25,}}>步骤2</div>
         <Link to='/app'><Button type="primary">返回</Button></Link>
      </div>
    );
  }
}

export default Step2;
