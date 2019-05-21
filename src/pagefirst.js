import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
class pagefirst extends Component {
  constructor(props,context){
    super(props,context);
    this.state={
      username:"",
  }
}
  componentWillMount(){
    var currentloginname=localStorage.getItem('login');
    for(var i=0;i<localStorage.length;i++){

      var name = localStorage.key(i);

      var value = localStorage.getItem(name);
      console.log(i,value);
 }
    var a=localStorage.getItem('a');
    console.log("a",a);
    this.setState({
      username:currentloginname,
    });
    
  }
  render() {
    return (
      <div className="App">
         <div style={{fontSize:25,}}> 这是主页面下的1.1页面</div>
         <div style={{fontSize:25,}}>欢迎您{this.state.username}</div>
         <Link to='/app'><Button type="primary">返回</Button></Link>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
     logininfo:state.reducerlogin.logininfo,
  };
}
function mapDispatchToProps(dispatch){
  return{
   
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(pagefirst);

