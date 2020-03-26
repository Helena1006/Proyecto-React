import  React from 'react';
import '../assets/styles/components/app.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import '../assets/styles/components/app.scss';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/Carouselitem';


const App = () =>(
    <div className="App">
	<Header/>
	<Search/>
	<Categories>
	<Carousel>
	<Carouselitem/>
	</Carousel>
	</Categories>
	<Footer/>

   </div>
);
 export default App;