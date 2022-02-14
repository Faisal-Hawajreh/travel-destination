import "./Home.css"
import Header from '../haeder/Haeder.js';
import Footer from '../footer/Footer.js';
import Tours from '../tours/Tours.js';
import CityData from '../../data/db.json';
import TourDetails from '../TourDetails/TourDetails.js';

import { Routes, Route} from "react-router-dom";





function Home(){


    return (
        <>
        <header>
            <Header/>
        </header>
        <Routes>
        <Route path='/' element={<div id="photos"><Tours myData = {CityData}/> </div>}/>
        <Route path='/City/:id' element={<div id="photos"><TourDetails myData = {CityData}/></div>}/>
        </Routes> 

        <footer>
            <Footer/>
        </footer>
        </>



    );
}
export default Home;