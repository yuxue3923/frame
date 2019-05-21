import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import {Link} from 'react-router-dom'
import cookie from 'react-cookies';
class pagethird extends Component {
  
  componentWillMount(){
    var user=cookie.load('userId');
    this.setState({
      username:user,
    });
  }
  render() {
    return (
      <div className="App">
          <div style={{fontSize:25,}}>这是主页面下的1.3页面</div>
          <div style={{fontSize:25,}}>欢迎您{this.state.username}</div>
         <Link to='/app'><Button type="primary">返回</Button></Link>
      </div>
    );
  }
}

export default pagethird;
