import Header from '../haeder/Haeder.js';
import Footer from '../footer/Footer.js';
import Tours from '../tours/Tours.js';
import CityData from '../../data/db.json';

import "./Home.css"

function Home(){
    return (
        <>
        <header>
            <Header/>
        </header>
        <div id="photos">
        <Tours myData = {CityData}/>  
        </div>
        <footer>
            <Footer/>
        </footer>
        </>



    );
}
export default Home;