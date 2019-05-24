import React, { Component } from 'react';
import './App.css';
import { Button,Input, Icon } from 'antd';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import cookie from 'react-cookies';
const IconFont=Icon.createFromIconfontCN({
  scriptUrl:'//at.alicdn.com/t/font_1141242_f47j01826q.js',
});

class loginIndex extends Component {

  constructor(props,context){
    super(props,context);
    this.state={
      username:"",
      a:["a","b","c"],
  }
}
 
change(e){
  this.setState({
    username:e.target.value,
  })
}
handclick(){
  const {setLogininfo}=this.props;
  setLogininfo({
    type:'LoginSuccess',
    payload:{
      username:this.state.username,
    }
  })
  if(!localStorage.getItem('login')){
  localStorage.setItem('login',this.state.username);
  // localStorage.setItem('a',this.state.a)
  }
  if(!sessionStorage.getItem('login2')){
  sessionStorage.setItem('login2',this.state.username);
  }

  if(!cookie.load('userId')){
    cookie.save('userId', this.state.username,{ path: '/' });
  }
}
  render() {
    return (
      <div className="App">
          <div style={{fontSize:25,}}>这是登录页面</div>
          {/* <div>
            <Button type="primary">
            <IconFont type="icon-xingzhuang"  style={{fontSize:"20px"}}/>
            </Button>
          </div> */}
          <div className="App"/>
          {/* <Input style={{width:"300px"}}onChange={this.change.bind(this)} placeholder="你的名字"/> */}
         <Link to='/app'><Button onClick={this.handclick.bind(this)} type="primary">编辑课件</Button></Link>
         <Link to='/pagefir'><Button type="primary">创建课件</Button></Link>
         <Link to='/teach'><Button type="primary">授课</Button></Link>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{

  };
}
function mapDispatchToProps(dispatch){
  return{
    setLogininfo:(state)=>dispatch(state),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(loginIndex);
