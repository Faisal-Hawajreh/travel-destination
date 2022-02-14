import "./Tours.css";
import Tour from "./tour/Tour";
function Tours(props){

    return(
    <>
    {
        props.myData.map((tour,index)=>{
            return <Tour tour={tour} key={index}/>   
        })
    }
    </>
)

}

export default Tours;