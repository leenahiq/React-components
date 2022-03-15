
//short circuit evaluation in javascript 
//if(true && true ){
//  execute -------> will chech and process second condition
//}
//if (false && true){
//    execute ---------will stop after checking on first condition 
//}
 //lets apply in react

import { useState } from "react"

const ShortCirEval =() =>{
    const [demo, setdemo] =useState(true);
    return(
        <div>
            <h1 >this is Example of Short Circuit Evaluation</h1>
            <h2 className="h1style">{demo || "Leenah is not present"}</h2>
            <h2 className="h1style">{demo && "Leenah is present "}</h2>
        </div>

    )
    
}
export default ShortCirEval

// Html codes In react called JSX 
//short Circuit evaluation if you want to render multiple data 
// use &&  or || logical operator