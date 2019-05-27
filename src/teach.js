import React, { Component } from 'react';
import './App.css';
import PropTypes from "prop-types";
import { Button,Input, Icon ,Carousel} from 'antd';


var isVisible = true;

export default class Teach extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context) {
        super(props, context);
        this.state = {
           currentpage:1,
        };
    }
   
   onChange=(current)=> {
        console.log(current);
        this.setState({
            currentpage:current+1,
        });
      }
    next(){
        this.refs.Carousel.next();
    }
    prev(){
        console.log("a")
        this.refs.Carousel.prev();
    }
    shrink(){
        if(isVisible) {
            this.refs.shrink.style.display="none";
            isVisible = false;
        }
        else{
            this.refs.shrink.style.display="block";
            isVisible = true;
        }
      
    }
  render(){
      return (
      <div >
       <div style={{position:"absolute" ,height:"auto",top:"94%",left:"0%",zIndex:"99"}} className="nav tool"> 
        <Button type="primary" size="small" block><Icon type="appstore"/><div>菜 单</div></Button>
        <Button type="primary" size="small" block><Icon type="appstore"/><div>最小化</div></Button>
        <Button type="primary" size="small" block className="at-right-border"><Icon type="appstore"/><div>用 户</div></Button>
      </div> 
      <div style={{position:"absolute" ,height:"auto",top:"94%",right:"0",zIndex:"99"}} className="nav tool"> 
        <Button type="primary" size="small" block onClick={()=>this.prev()}><Icon type="appstore"/><div>上一页</div></Button>
        <Button type="primary" size="small" block><Icon type="appstore"/><div>{this.state.currentpage}/5</div></Button>
        <Button type="primary" size="small" block className="at-right-border" onClick={()=>this.next()}><Icon type="appstore"/><div>下一页</div></Button>
      </div> 
     
      <div style={{position:"absolute" ,height:"auto",top:"30%",right:"0",zIndex:"99"}}  ref="shrink" className="nav col tool"> 
        <Button type="primary" size="small" block><Icon type="appstore"/><div>指针</div></Button>
        <Button type="primary" size="small" block><Icon type="appstore"/><div>画笔</div></Button>
        <Button type="primary" size="small" block ><Icon type="appstore"/><div>橡皮檫</div></Button>
        <Button type="primary" size="small" block ><Icon type="appstore"/><div>撤销</div></Button>
        <Button type="primary" size="small" block ><Icon type="appstore"/><div>学生状态</div></Button>
        <Button type="primary" size="small" block ><Icon type="appstore"/><div>交流</div></Button>
        <Button type="primary" size="small" block onClick={()=>this.shrink()}><Icon className="shrink" style={{height:"12px"}} type="appstore"/></Button>
      </div> 
      <div style={{position:"absolute" ,height:"auto",top:"50%",right:"0",zIndex:"98",opacity:"0.8"}}   className="nav col tool"> 
        <Button type="primary" size="small" block onClick={()=>this.shrink()}><Icon className="shrink" style={{height:"12px"}} type="appstore"/></Button>
    </div> 
      <Carousel afterChange={this.onChange} style={{height:"100%"}} dots={false} ref="Carousel">
        <div>   
            <img src="http://bpic.588ku.com//back_origin_min_pic/19/04/16/aba3ab2789b1aea6c7412512c41e887d.jpg" alt="" height="971" width="1680"/>
        </div>
        {/* 
        wid 1680
        height 971
        */}
       
        
        <div>
            <img src="http://i2.hdslb.com/bfs/archive/582b62c6e6fea16ed2dc1973073d4cd64f72e7d0.jpg" alt="" height="971" width="1680"/>
        </div>
        <div>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png" alt="" height="971" width="1680"/>
        </div>
        <div>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png" alt="" height="971" width="1680"/>
        </div>
        <div>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png" alt="" height="971" width="1680"/>
        </div>
      </Carousel>
      </div>
      )
  }
}