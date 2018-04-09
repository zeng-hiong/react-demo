import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import eyeop from '../../img/eyeop.png';
import eyecl from '../../img/eyecl .png';

function Eyeposi(props){
	if(!props.flag){
		return (<img src={eyecl} className='imgeyes' />)
	}else{
	  return(<span>获取验证码</span>)
	}
}
 export default Eyeposi;
 