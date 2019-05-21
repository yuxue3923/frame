import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import {Link} from 'react-router-dom'
class pagesecond extends Component {
  constructor(props,context){
    super(props,context);
    this.state={
      username:"",
  }
}
  componentWillMount(){
    var currentloginname2=sessionStorage.getItem('login2');
    this.setState({
      username:currentloginname2,
    });
  }
  render() {
    return (
      <div className="App">
        <div style={{fontSize:25,}}>这是主页面下的1.2页面</div>
        <div style={{fontSize:25,}}>欢迎您{this.state.username}</div>
       <Link to='/app'><Button type="primary">返回</Button></Link>
      </div>
    );
  }
}

export default pagesecond;
