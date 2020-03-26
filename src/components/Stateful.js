//componente precentacional 
//importamos react
import React, { Component } from 'react';

//creamos nuestro componenteque es una clase stateful exteniendo de component aqui no esta
//ciclo de vida de nuestra aplicacion asi como la logica

class Stateful extends Component{
/*nuestro componente tiene acceso a una construcion que sirve para props se 
inicializa asignando el estado con this.state= a un objeto y dijo que hello = 
'Hola Mundo' */

constructor (props){
	super(props);
	this.state= { //se declara nuestra variables que es this 
		hello: 'Hola Mundo DSM54'
		}
	}
/*dentro de render va el html que va empujar a la aplicacion*/

render(){
	return (
/*aqui se hace la llamada al this que tiene 'Hola Mundo'*/
		<h1> {this.state.hello}</h1>
		)
}};
export default Stateful; //exportamos el componente 