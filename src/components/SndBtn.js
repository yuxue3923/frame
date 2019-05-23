import React, { Component } from 'react';

import { Icon,Button} from 'antd';

import { mergeObjectArr as merge} from '../util'

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

const fileNameAndIconList = [{name:"新建",icon:"appstore"},{name:"保存",icon:"appstore"},{name:"分享",icon:"appstore"},{name:"导出",icon:"appstore"}];
const fileFns = [function(){console.log("I'm fileFn1")},function(){console.log("I'm fileFn2")},function(){console.log("I'm fileFn3")},function(){console.log("I'm fileFn4")}];
//const fileMsg = fileNameAndIconList.reduce((acc,curr,i)=>acc.concat([Object.assign({},curr,{fn:fileFns[i]})]),[]);
const fileMsg = merge(fileNameAndIconList,fileFns,"fn");
/**
 * 文件按钮
 */
const editNameList = [{name:'新增'},{name:'undo'},{name:'redo'}];
const editIconList = ['appstore','appstore','appstore'];
const editFns = [];
const editMsg = merge(merge(editNameList,editIconList,"icon"),editFns,"fns");
/**
 * 编辑按钮
 */
const imbortNameList = [{name:'PDF'},{name:'图片'},{name:'音视频'}];
const imbortIconList = ['appstore','appstore','appstore'];
const imbortFns = [];
const imbortMsg = merge(merge(imbortNameList,imbortIconList,"icon"),imbortFns,"fns");
/**
 * 导入按钮
 */
const shapeNameList = [{name:'矩形'},{name:'三角形'},{name:'圆形'}];
const shapeIconList = ['appstore','appstore','appstore'];
const shapeFns = [];
const shapeMsg = merge(merge(shapeNameList,shapeIconList,"icon"),shapeFns,"fns");
/**
 * 形状按钮
 */
const textNameList = [{name:'边框'},{name:'填充'},{name:'字体'}];
const textIconList = ['appstore','appstore','appstore'];
const textFns = [];
const textMsg = merge(merge(textNameList,textIconList,"icon"),textFns,"fns");
/**
 *文本按钮
 */
const penNameList = [{name:'粗细'},{name:'颜色'},{name:'橡皮'}];
const penIconList = ['appstore','appstore','appstore'];
const penFns = [];
const penMsg = merge(merge(penNameList,penIconList,"icon"),penFns,"fns");
/**
 * 画笔按钮
 */
const attrNameList = [{name:'颜色'},{name:'透明度'},{name:'大小'},{name:'角度'}];
const attrIconList = ['appstore','appstore','appstore','appstore'];
const attrFns = [];
const attrMsg = merge(merge(attrNameList,attrIconList,"icon"),attrFns,"fns");
/**
 * 属性按钮
 */
const groupNameList = [{name:'邀请'},{name:'交流'},{name:'授课'},{name:'人员'}];
const groupIconList = ['appstore','appstore','appstore','appstore'];
const groupFns = [];
const groupMsg = merge(merge(groupNameList,groupIconList,"icon"),groupFns,"fns");
/**
 * 团队按钮
 */
const file = <SndBtn msgArr={fileMsg} />;
const edit = <SndBtn msgArr={editMsg} />;
const imbort = <SndBtn msgArr={imbortMsg} />;
const shape = <SndBtn msgArr={shapeMsg} />;
const text = <SndBtn msgArr={textMsg} />;
const pen = <SndBtn msgArr={penMsg} />;
const attr= <SndBtn msgArr={attrMsg} />;
const group= <SndBtn msgArr={groupMsg} />;

export {file,edit,imbort,shape,text,pen,attr,group}
