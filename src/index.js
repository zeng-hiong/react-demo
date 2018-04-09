import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppTop from './js/top.js';
import Login from './js/login .js';
import Footer from './footer.js';
import Sign from './js/sign.js';
import {History} from 'react-router';
import Forgetname from './js/login/fortgetname.js';
import Forgetpass from './js/login/forgetpassword.js';
import Containerbox from './containerbox.js';
import {BrowserRouter as Router, Route, Link }from 'react-router-dom';

var Home=React.createClass({
	render:function(){
		var data=124;
		return (
          <div id="home">
             <AppTop word="首页" />
             <Containerbox />
             <Footer />
          </div>
			)
	}
});
var SiteRouter=React.createClass({
	render:function(){ return ( <Router><div><Route path="/login" component={Login} /><Route exact path='/' component={Home} /><Route path='/sign' component={Sign} /><Route path='/forgetname' component={Forgetname} /><Route path='/forgetpass' component={Forgetpass} /></div></Router>);}
})
ReactDOM.render(<SiteRouter />,document.getElementById('root'));
