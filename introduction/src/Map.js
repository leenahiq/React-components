
//import { render } from "@testing-library/react"
const Calculator = () => {
    const button = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/"]
    const calc = button.map((x)=>{
       return <h1>{x}</h1>
    })
  return (
    <div>



  
<h1>{calc}</h1>
   </div>
  );
};
export default Calculator;



//     State ={
//         bookPrices:[2.5,3.5,4.5,6.0]
//     }

// render() {
//     return (
// <div>
//    {
//        this.state.bookPrices.map((price)=>{
//       return <h1 key={index}></h1>
//           }   )
//    } 
// </div>
//     )   
// }


// export default State