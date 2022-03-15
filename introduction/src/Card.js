import "./App.css"
const Cards = (props)=>{
    return(
        <div className="box">
        <div>
            <img src ={props.image}/>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>

        </div>
        </div>
 )   
}
export default Cards