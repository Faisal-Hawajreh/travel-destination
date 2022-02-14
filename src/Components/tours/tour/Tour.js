import "./Tour.css";
import {Link} from "react-router-dom";
function Tour(props){
    // console.log(props)
    return (
        <>
            <h2>{props.tour.name}</h2>
            <Link to={`./City/${props.tour.id}`}>{<img src={props.tour.image} alt={props.tour.name}/>}</Link>
        </>
    )

}
export default Tour