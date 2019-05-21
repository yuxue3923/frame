import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
class pagefour extends Component {
    constructor(props,context){
        super(props,context);
        this.state={
          username:"",
      }
    }
  componentWillMount(){
    const {logininfo}=this.props;
    if(logininfo){
    this.setState({
        username:logininfo.username,
      });
    }
  }
  render() {
    return (
      <div className="App">
          <div style={{fontSize:25,}}>这是主页面下的1.4页面</div>
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
  )(pagefour);
  
  