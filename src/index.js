import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//importamos el componente El hola Mundo
/*import Holamundo from './components/Holamundo'; //se comento 3/3*/

//importamos bottun from
import * as serviceWorker from './serviceWorker';

//seleccionamos nuestra carpeta del componente 
/* 3/3 import Stateful from '../src/components/Stateful';*/

//importamos nuestro components button
//10/3 import Button from '../src/components/Button';

//importamos nuestro Header

//12/3 import Header from '../src/components/Header';
//ReactDOM.render(<Header/>, document.getElementById('root'));

//importamos header con imagen de mi nombre  
//import Header from '../src/components/Header';

//importamos nuestro components heard con mi nombre 
//ReactDOM.render(<Header/>, document.getElementById('root'));

//importamos nuestro Seach 
//import Search from '../src/components/Search';

//importamos nuestro Seach 
//ReactDOM.render(<Search/>, document.getElementById('root'));


//importamos nuestro Footer
//import Footer from '../src/components/Footer';
//importamos nuestro Footer en ReactDom
//ReactDOM.render(<Footer/>, document.getElementById('root'));


//importamos nuestro Carousel
//import Carousel from '../src/components/Carousel';
//importamos nuestro Carousel en ReactDom
//ReactDOM.render(<Carousel/>, document.getElementById('root'));


//importamos nuestro APP
import App from '../src/containers/App';
//importamos nuestro App en ReactDom
ReactDOM.render(<App/>, document.getElementById('root'));


/*importamos nuestro APP
import Layout from '../src/Examen2/Layout';
importamos nuestro App en ReactDom
ReactDOM.render(<Layout/>, document.getElementById('root'));*/

/*importamos nuestro login
import Login from '../src/containers/Login';
//importamos nuestro login en ReactDom
ReactDOM.render(<Login/>, document.getElementById('root'));*/

/*importamos nuestro Registro
import Register from '../src/containers/Register';
//importamos nuestro Registro en ReactDom
ReactDOM.render(<Register/>, document.getElementById('root'));*/

//importamos nuestro components stateful
/* 3/3 ReactDOM.render(<Stateful/>, document.getElementById('root'));*/

//importamos nuestro components Button
//ReactDOM.render(<Button text='Guardar'/>, document.getElementById('root'));


// importamos nuestro Holamundo de render
/*ReactDOM.render(<HolaMundo/>, document.getElementById('root'));*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
