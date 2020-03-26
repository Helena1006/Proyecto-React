import  React from 'react';
import '../assets/styles/components/Layout.scss';
import EAPJ from '../components/EAPJ';
import Vacaciones from '../components/Vacaciones';
import ClaseDigital from '../components/ClaseDigital';


const Layout = () =>(
    <div className="Layout">
	<EAPJ/>

	<Vacaciones/>
	<ClaseDigital/>
   </div>
);
 export default Layout;