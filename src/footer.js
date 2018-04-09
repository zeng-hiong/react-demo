import React, { Component } from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Link}from 'react-router-dom';
import img1 from './img/home-on.png';
import img2 from './img/financing-of.png';
import img3 from './img/me-of.png';
import img4 from './img/more-of.png';

class Footer extends Component {
  render() {
    var arr=[{src:img1,page:'首页',path:'/'},{src:img2,page:'理财',path:'/login'},{src:img3,page:'我的',path:'/my'},{src:img4,page:'更多',path:'more'}]
    return (
      <footer className="footer">
        <ul>{
          arr.map(function(name){
            return <li><Link to={name.path}><img src={name.src} /><p>{name.page}</p></Link></li>
          })
        }
        </ul>
      </footer>
    );
  }
};
export default Footer;
