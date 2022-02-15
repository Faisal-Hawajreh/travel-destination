import "./TourDetails.css"
import { useState } from 'react';

import {useParams} from "react-router-dom";
function TourDetails(props){
    // console.log(props.myData)
    let { id } = useParams();
    // console.log(id)
    let City = props.myData.filter(city=>city.id===id)
    // console.log(City[0])

    const [SeeMore, setSeeMore] = useState(false);
    
    function HandleClick(){
        setSeeMore(!SeeMore)
        console.log(SeeMore)
    }

    return(
        <>
        <p>id : {City[0].id}</p>
        <h2>{City[0].name}</h2>
        <br></br>
        {SeeMore?<p>{City[0].info.slice(0,350) }<span onClick={HandleClick}> (show more...)</span></p>
        :<p>{City[0].info} <span onClick={HandleClick}> (...show less)</span></p>}
        <br></br>
        <img src={City[0].image} alt={City[0].name}/>
        <br></br>
        <h2>Price : {City[0].price}</h2>
        </>
        
    )
}
export default TourDetails;