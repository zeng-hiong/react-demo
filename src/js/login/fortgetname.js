import React from 'react';
import '../../index.css';
import AppTop from "../top.js";
import phone from '../../img/phonenu.png';
import makesue from '../../img/passwor.png';

 var Forgetname=React.createClass({
 	render:function(){
 		return(
 		<div id="forgetname"><AppTop word="忘记用户名" /> 
       <div className="inputbox"><p><img src={phone} /><input id="username" placeholder="请输入绑定的手机号码"  /></p>
       <p><img src={makesue} alt='手机号' /><input id="password" placeholder="密码" /><span>获取验证码</span></p></div>
       <button className="loginbtn">确定</button>
        </div>
 			);
 	}
 });
 export default Forgetname;
 