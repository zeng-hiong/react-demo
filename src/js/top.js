import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import {BrowserRouter as Router, Route, Link}from 'react-router-dom';
 var AppTop=React.createClass({
 	render:function(){
 		return(
 		<div id="header"> 
        <header>
             <h2>{ this.props.word }</h2>
        </header>
        </div>
 			);
 	}
 });

 export default AppTop;
 