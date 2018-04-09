import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppTop from './js/top.js';
import Login from './js/login .js';
import App from './App.js';
import Footer from './footer.js';
import Sign from './js/sign.js';
import {History} from 'react-router';
import Forgetname from './js/login/fortgetname.js';
import Forgetpass from './js/login/forgetpassword.js';
import Containerbox from './containerbox.js';
import {BrowserRouter as Router, Route, Link }from 'react-router-dom';

var data=[{
	author:'作者1',text:"评论"
},{author:"作者2",text:"评论2"}];

var Comment=React.createClass({
	render:function(){
		return(<div className="comment">
			<h2 className="commentAuthor">{this.props.author}</h2>
            {this.props.children}
			</div>)
	}
});
var CommentList=React.createClass({
	render:function(){
		var commentNodes=this.props.data.map(function(comment){
			return(<Comment author={comment.author}>{comment.text}</Comment>)
		});
		return(<div className="commentList">{commentNodes}</div>)
	}
});
var NoteList=React.createClass({
	render:function(){
		return(<ol>{React.Children.map(this.props.children,function(child){
			return <li>{child}</li>
		})}</ol>)
	}
});
var CommentForm=React.createClass({
	render:function(){
		return(<div className="commentForm">Hello world!I am a CommentForm.</div>)
	}
});

var SiteIndex=React.createClass({
	render:function(){
		var data=124;
		return (
          <div id="index">
             <AppTop word="首页" />
             <Containerbox />
             <Footer />
          </div>
			)
	}
});
var SiteRouter=React.createClass({
	render:function(){ return ( <Router><div><Route path="/login" component={Login} /><Route exact path='/' component={SiteIndex} /><Route path='/sign' component={Sign} /><Route path='/forgetname' component={Forgetname} /><Route path='/forgetpass' component={Forgetpass} /></div></Router>);}
})
ReactDOM.render(<SiteRouter />,document.getElementById('root'));
