import React from 'react';
import AppTop from "./top.js";
import img from '../img/logo@3x.png';
import imgpass from '../img/passwor.png';
import imguse from '../img/userna.png';
import imgeyecl from '../img/eyecl .png';
import Logininput from './login/logininput.js';
import {BrowserRouter as Router, Route, Link}from 'react-router-dom';
import '../index.css';
var arr=[imguse,imgpass,imgeyecl];
const Login=()=>({render:function(){
	return (<div><AppTop word="登录" /><div id="login"><img className="logo" src={img} />
	<Logininput  name="登录" img={arr} flag={false} />
	<p className="forget"><span><Link to='/forgetname'>忘记用户名</Link></span><span><Link to='/forgetpass'>忘记密码</Link></span></p><div className="bottom"><img />
<span>还没有账号?现在去<span><Link to='/sign'>免费注册</Link></span></span><img /></div></div></div>);}});
 export default Login;
 