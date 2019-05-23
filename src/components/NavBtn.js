import React, { Component } from 'react';

import { Icon,Button,Popover} from 'antd';


export default class NavBtn extends Component {

    render() {
        return (
        <Popover placement="bottomLeft" content={this.props.content} overlayClassName="self-popover">
        <Button type="primary">
          <Icon type="appstore"/>
             <div>{this.props.buttonName} </div>
        </Button>
        </Popover>
        )
    }
}

