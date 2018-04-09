import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
var Myput=React.createClass({
	getInitialState:function(){
		return {value:'hello world'}
	},
	handleChange:function(event){
		this.setState({value:event.target.value})
	},
	render:function(){
       var value=this.state.value;
       return(<div><input type="text" value={value} onChange={this.handleChange} /><p>{value}</p></div>)
	}
});
 var MyComponent=React.createClass({
 	getInitialState:function(){
        return {liked:'hello'}
 	},
 	handleClick:function(){
      this.refs.myTextInput.focus();
      this.setState({liked: !this.state.liked})
 	},
 	propTypes:{
 		title:React.PropTypes.string.isRequired,
 	},
 	render:function(){
 		var text=this.state.liked?'like':'don\'t like';
 		return(
 		<div> 
 		     <Myput />
 		      <p>{this.props.title+text}</p>
 		      <p>{text}</p>
 		      <p>{this.state.liked}</p>
              <input type="text" ref="myTextInput" />
              <input type="button" value="Focus the text input" onClick={this.handleClick} />
        </div>
 			);
 	}
 });
 export default MyComponent;
