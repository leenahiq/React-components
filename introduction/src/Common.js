import { useState } from "react";

const Common = () => {

const [numbers, setNumbers] = useState([1,2,3,4])
const addHandler = () =>{
let storedNums = [...numbers]
storedNums.push(storedNums[storedNums.length -1] +1)
setNumbers(storedNums)
}
const removeHandler =(index)=>{
    let storedNums = [...numbers]
    storedNums.splice(index,1)
    setNumbers(storedNums)
}



    return(
        <div>
            {numbers.map((number, index) =>{
                return(
                    <div>
                 <h1 key={index}>{number}</h1>
                 <button onClick={()=>removeHandler(index)}>delete</button>
                 </div>
                )
            })}
            <button onClick={addHandler}>add one</button>
        
        </div>
    )
}

// const Card = ()=>{
// return (
//     <div>
//         <h1
//     </div>
// )

// }
export default Common;