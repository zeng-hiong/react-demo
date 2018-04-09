import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import {BrowserRouter as Router, Route, Link}from 'react-router-dom';
import Eyeposi from './eyepos.js'

 var Logininput=React.createClass({
 	render:function(){
 		return(
 		<div> 
       <div className="inputbox"><p><img src={this.props.img[0]} /><input id="username" placeholder="用户名"  /></p>
       <p><img src={this.props.img[1]} /><input id="password" placeholder="密码" /><Eyeposi flag={this.props.flag} /></p></div>
       <button className="loginbtn">{this.props.name}</button>
        </div>
 			);
 	}
 });
 export default Logininput;
 