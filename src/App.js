import React, { Component } from 'react';
import './App.css';
import {  Layout, Menu, Icon,Input,Button,Card,Popover,Drawer} from 'antd';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
const { Header, Sider, Content ,Footer} = Layout;
const {TextArea} = Input;

export default class SiderDemo extends Component {
  state = {
    collapsed: false,
    sourceVisible: false, 
  };
 
  showResource = () => {
    this.setState(function(preState,props){
      return { sourceVisible:!preState.sourceVisible }
    });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{width: '100%', height: '100vh'}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} collapsedWidth={0} breakpoint="xxl" defaultCollapsed width={249}
          style={{
            //  minHeight:893,
            //  minWidth:2490
            background:'rgb(249,249,249)',
            minHeight:"100%",
            borderRight:0
             /* 200 115 */
          }}
        >
         
         
        <div className="logo">
         </div>
          
        <Card style={{width:"200",height:115,margin: "21px"}} className="single-viewer">
        </Card>
            
        </Sider>
        <Layout>
          <Header style={{ background: '#1DA569', padding:0,}} >
          <div className="main-nav">
           <div className="nav" >
          <Popover title=">>>>">
          <Button type="primary">
            <Icon type="appstore"/>
               <div>文件 </div>
          </Button>
          </Popover>
          <Button type="primary">
            <Icon type="appstore"/>
               <div> 编辑 </div>
          </Button>
          <Button type="primary">
            <Icon type="appstore"/>
               <div> 导入 </div>
          </Button>
          <Button type="primary">
            <Icon type="appstore"/>
               <div> 形状 </div>
          </Button>
          <Button type="primary">
            <Icon type="appstore"/>
               <div> 文本 </div>
          </Button>
          <Button type="primary">
            <Icon type="appstore"/>
               <div> 画笔 </div>
          </Button>
          <Button type="primary">
            <Icon type="appstore"/>
               <div> 属性 </div>
          </Button>
        </div> 
        <div className="nav reverse" style={{width:"100%"}}>
          <Button type="primary" >
            <Icon type="appstore"/>
               <div> 个人 </div>
          </Button>
          <Button type="primary">
            <Icon type="appstore"/>
               <div> 团队 </div>
          </Button>
          <Button type="primary" style={{marginLeft:"10%"}} onClick={this.showResource}>
            <Icon type="appstore"/>
               <div> 资源 </div>
          </Button>
          <Drawer
              style={{ margin: '8px 0 8px 0' }}
              title="Basic Drawer"
              closable={false}
              maskClosable={false}
              mask={false}
              visible={this.state.sourceVisible}
          >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
          </div>
        </div>
          </Header>
          
          <Layout style={{padding: ' 24px',}}>
          <Content
            style={{
               padding:24,
              background: '#fff',
            //  width: '100%',
               height: '100vh', 
            }}
            className={this.state.sourceVisible?"wid-shrink":"wid-content"}
          >
        
            Content
         
          </Content>
          </Layout>
          <Footer style={{ background: '#fff', padding:10 ,margin:10}} className={this.state.sourceVisible?"wid-shrink":"wid-footer"}>
          <Icon
             // className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <TextArea row ={5}/>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}



/* function mapStateToProps(state){
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
 */



