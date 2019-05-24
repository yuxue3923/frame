import React, { Component } from 'react';
import './App.css';
import { Button,Input, Icon ,Carousel} from 'antd';



export default class Teach extends Component {

   onChange(a, b, c) {
        console.log(a, b, c);
      }
  render(){
      return (<Carousel afterChange={this.onChange}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>)
  }
}