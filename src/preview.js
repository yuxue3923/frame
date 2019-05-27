
import React, { Component } from 'react';
import { Card, Row, Col, Layout, } from 'antd';

import PropTypes from "prop-types";


class Preview extends Component {
  static contextTypes={
    router:PropTypes.object
  }
  constructor(props,context){
    super(props,context);
    this.state = {
      current: 0,
      step_content: [],
    };
  }
  render() {
    return (
      <div >
       预览
      </div>
    );
  }
}

export default Preview;


