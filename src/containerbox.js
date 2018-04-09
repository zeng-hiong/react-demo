import React, { Component } from 'react';
import './index.css';

class Containerbox extends Component {
  render() {
    var arr=[{src:"/img/home-on.png",page:'首页'},{src:'img/financing-of.png',page:'理财'},{src:'./img/me-of.png',page:'我的'},{src:'./img/more-of.png',page:'更多'}]
    return (
      <div id="containerbox"></div>
    );
  }
};
export default Containerbox;
