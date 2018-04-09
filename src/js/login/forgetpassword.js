import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import AppTop from "../top.js";
import Eyeposi from './eyepos.js';
import phone from '../../img/phonenu.png';
import message from '../../img/message.png';
import  password from '../../img/passwor.png';

 var Forgetpass=React.createClass({
 	render:function(){
 		return(
 		<div id="forgetpassword"> <AppTop word="忘记密码" /> 
       <div className="inputbox"><p><img src={phone} /><input id="username" placeholder="请输入绑定的手机号码" /></p>
       <p><img src={message} /><input id="password" placeholder="请输入验证码" /><Eyeposi flag={true} /></p>
       <p><img src={password} /><input id="username" placeholder="请输入新的用户密码" /><Eyeposi flag={false} /></p>
       <p><img src={password} /><input id="username" placeholder="请确认新的登陆密码" /><Eyeposi flag={false} /></p></div>
       <button className="loginbtn">下一步</button>
        </div>
 			);
 	}
 });
 export default Forgetpass;
 