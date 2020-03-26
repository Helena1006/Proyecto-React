import React, { Component } from 'react';

class Vacaciones extends Component{


constructor (props){
	super(props);
	this.state= { 
		Elena: 'De vacaciones'
		}
	}

render(){
	return (
/*aqui se hace la llamada al this que tiene 'Hola Mundo'*/
		<h1> {this.state.Elena}</h1>
		)
}};
export default Vacaciones; 