import React, {Component} from 'react';
import { Button,Row, Col,Divider} from 'antd';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'; // see installation section above for versions of NPM older than 3.0.0
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default

class Demo extends Component {
    constructor(props,context){
        super(props,context);
        this.state={
          src:'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
      }
    }
  _crop(){
    // image in dataUrl
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
    console.log("hellopic");
  }

  render() {
    return (
    <Row gutter={16}>
        <Col span={14}>
          <div style={{height:'100%', width: '100%'}}>
              <Cropper
               ref='cropper'
               src={this.state.src}
               style={{height: 480, width:800}}
               // Cropper.js options
               aspectRatio={16 / 9}
               guides={false}
               crop={this._crop.bind(this)} />
           </div>
        </Col>
        <Col span={10}>
           <div style={{margin:'10px'}}>
              <Button type="primary">确定</Button>
           </div>
           <Divider>您选择的图片区域如下</Divider>
           <div style={{margin:'10px 10px 10px 10px'}}>
            <img 
                  alt="scissor"
                  src={this.state.src} height="154"
                />
           </div>
        </Col>
    </Row>
    );
  }
}
export default Demo;