import "./Tours.css";
function Tours(props){
    // console.log(props)
    return(<>
    {
        props.myData.map((city,index)=>{
            return(
                <div key={index}>
                <h2>{city.name}</h2>
                <img src={city.image} alt={city.name}/>
                </div>
            )
        }
        )
    }
    </>
)

}

export default Tours;