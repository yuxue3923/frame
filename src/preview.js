
import React, { Component } from 'react';
import { Card, Row, Col,Icon ,Button,Form,Avatar,Divider, Comment, List, Input} from 'antd';
import "./App.css"
import PropTypes from "prop-types";
import moment from 'moment';
const TextArea = Input.TextArea;

const { Meta } = Card;
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
      xs: { span: 12 },
      sm: { span:12 },
    },
    wrapperCol: {
      xs: { span: 12},
      sm: { span: 12 },
    },
  };
  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );
  
  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );
class Preview extends Component {
  static contextTypes={
    router:PropTypes.object
  }
  constructor(props,context){
    super(props,context);
    this.state = {
      current: 0,
      step_content: [],
      recomcourselength:7,
      comments: [],
     submitting: false,
     value: '',
    };
  }
  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

      const recomcourselist=[];
    for (let i = 0; i < this.state.recomcourselength; i++) {
        recomcourselist.push(
            <div>
            <Row gutter={16}>
          <Col span={8}>
           <Card
             style={{ width:200 ,height:220}}
             cover={
               <img 
                 alt="example"
                 src="https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png" height="100"
               />
             }
           >
             <Row>
               <Col span={24}>
               <Meta
                   title="课件名称"
                   description="描述>>>>>>>>>>"
                />
               </Col>
             </Row>
             <br />
             <Row >
               <Col span={1}></Col>
               <Col span={8}><Icon type="delete"/>2534</Col>
               <Col span={7}><Icon type="rollback" />12万</Col>
               <Col span={7}><Icon type="rollback" />367</Col>
               <Col span={1}></Col>
             </Row>
           </Card>
       </Col>
       </Row>
       </div>
    );
      }

    return (
      <div >
      <Row style={{margin:"20px 20px 0px 20px",height:"100%"}}>
    
      <Col span={17} style={{textAlign:"right"}}>
      <img alt="example"src="https://gw.alipayobjects.com/zos/rmsportal/uVZonEtjWwmUZPBQfycs.png" height="550px"/>
      <div style={{position:"absolute",bottom:"0%",right:"1%",zIndex:"99",fontSize:"42px"}}> 
       <Icon type="appstore"/>
      </div>         
      </Col>
      <Col span={7} style={{textAlign:"left"}}>
      <Card title="课件详情">
           <Row gutter={16}>
              <Col span={8}>
                <Avatar style={{width:70,height:70}}
                  size="large"
                  src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                />
              </Col>
              <Col span={16}>
                <div className="head_one">fresh man</div>
                <div className="head_two">作者</div>
              </Col>
            </Row>
                   <Form >
                      <FormItem style={{ marginBottom: '0px' }} label="浏览量" {...formItemLayout} >
                          300
                      </FormItem>
                      <FormItem style={{ marginBottom: '0px' }} label="文件大小"  {...formItemLayout}>
                          100M
                      </FormItem>
                      <FormItem style={{ marginBottom: '0px' }} label="类别"  {...formItemLayout}>
                          k12教育
                      </FormItem>
                      <FormItem style={{ marginBottom: '0px' }} label="发布时间" {...formItemLayout} >
                          2019-05-27
                      </FormItem>
                      <FormItem style={{ marginBottom: '0px' }} label="页数" {...formItemLayout} >
                           7
                      </FormItem>
                      <FormItem style={{ marginBottom: '0px' }} label="名称" {...formItemLayout} >
                           一元一次方程
                      </FormItem>
                      <FormItem style={{ marginBottom: '0px' }} label="简介" {...formItemLayout} >
                           一元一次方程
                      </FormItem>
                  </Form>
            </Card>
        <Divider>你可以对课件进行以下操作</Divider>
       <Row  style={{margin:"0px 0px 0px 10px"}}>
        <Col span={4} style={{textAlign:"center",fontSize:"14px"}}>
          <Icon type="appstore"  style={{fontSize:"20px"}}/>
          <div>下载</div>
         </Col>
         <Col span={4} style={{textAlign:"center",fontSize:"14px"}}>
          <Icon type="appstore"  style={{fontSize:"20px"}}/>
          <div>点赞</div>
         </Col>
         <Col span={4} style={{textAlign:"center",fontSize:"14px"}}>
          <Icon type="appstore"  style={{fontSize:"20px"}}/>
          <div>分享</div>
         </Col>
         <Col span={4} style={{textAlign:"center",fontSize:"14px"}}>
          <Icon type="appstore"  style={{fontSize:"20px"}}/>
          <div>收藏</div>
         </Col>
       </Row>
      </Col>
      </Row>
      <Row>
      <Divider>相关课件推荐</Divider>  
      <Row style={{margin:"0px 0px 0px 20px"}}>
        <Col span={4}>
        {recomcourselist[0]}
       </Col>
       <Col span={4}>
        {recomcourselist[1]}
       </Col>
       <Col span={4}>
        {recomcourselist[2]}
       </Col>
       <Col span={4}>
        {recomcourselist[3]}
       </Col>
       <Col span={4}>
        {recomcourselist[4]}
       </Col>
       <Col span={4}>
        {recomcourselist[5]}
       </Col>
      </Row>
      </Row>
      <Row>
      <Divider>相关评论</Divider>  
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
      </Row>
      </div>
    );
  }
}

export default Preview;


