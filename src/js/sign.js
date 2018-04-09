import React from 'react';
import ReactDOM from 'react-dom';
import AppTop from "./top.js";
import img from '../img/logo@3x.png';
import imgphone from '../img/phonenu.png';
import imgmess from '../img/message.png';
import Logininput from './login/logininput.js';
import {BrowserRouter as Router, Route, Link}from 'react-router-dom';

import '../index.css';
var arr=[imgphone,imgmess];
const Sign=()=>({render:function(){return (<div><AppTop word="注册" /><div id="login">
	<img className="logo" src={img} />
	<Logininput  name="注册" img={arr} flag={true} />
	<div className="bottom">
	<span>已有账号?<span><Link to='/login' >返回登录</Link></span></span></div></div></div>);}});
 export default Sign;
 