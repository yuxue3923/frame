import React, { Component } from 'react';
import './App.css';
import { Button,} from 'antd';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
class AppIndex extends Component {
  
  render() {
    return (
      <div className="App">
          <div style={{fontSize:25,}}>这是主页面</div>
         
         <Link to='/app/pagefir'><Button type="primary">1.1</Button></Link>
         <Link to='/app/pagesec'><Button type="primary">1.2</Button></Link>
         <Link to='/app/pagethir'><Button type="primary">1.3</Button></Link>
         <Link to='/app/pagefour'><Button type="primary">1.4</Button></Link>
         <div>
            {this.props.children}
        </div>
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
)(AppIndex);