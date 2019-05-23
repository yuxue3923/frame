import React, { Component } from 'react';

import { Icon,Button} from 'antd';

import { generateHolderArray as arrGen} from '../util'

export default class SndBtn extends Component {
    
    render() {
        const len = this.props.msgArr.length;
        const list = this.props.msgArr.map((msg,i)=><Button key={i} type="primary" size="large" onClick={msg.fn} className={len===i+1?"at-right-border":"normal"}>
        <Icon type={msg.icon}/>
           <div>{msg.name} </div>
       </Button>)
        return <div className="second-button">{list}</div>
    }
}
const fileNameAndIconList = [{name:"新建",icon:"appstore"},{name:"保存",icon:"appstore"},{name:"分享",icon:"appstore"},{name:"保存",icon:"appstore"}];
const fileFns = [function(){console.log("I'm fileFn1")},function(){console.log("I'm fileFn2")},function(){console.log("I'm fileFn3")},function(){console.log("I'm fileFn4")}];
const fileMsg = fileNameAndIconList.reduce((acc,curr,i)=>acc.concat([Object.assign({},curr,{fn:fileFns[i]})]),[]);

const editNameAndIconList = ['新增','undo','redo'];

const importNameList = ['PDF','图片','音视频'];

const shapeNameList = ['矩形','三角形','圆形'];

const textNameAndIconList = ['边框','填充','字体'];

const penNameList = [];

const attrNameList = [];

const file = <SndBtn msgArr={fileMsg} />;
/* const edit = <SndBtn msgArr={editMsg} /> */

export {file }