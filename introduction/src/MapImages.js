import Cards from "./Card";
import img1 from "./img/austria.jpg";
import img2 from "./img/croatia.jpg";
import img3 from "./img/france.jpg";
import img4 from "./img/greece.jpg";
import img5 from "./img/sweden.jpg";
const Imges = () => {
  const myArray = [
    {
      image: img1,
      heading: "Austria",
      text: "This is a beautiful country"
    },
    {
      image: img2,
      heading: "Croatia",
      text:"Beautiful landscape waiting for you "
    },
    {
      image: img3,
      heading: "France",
      text:"Perfect vication location "
    },
    {
      image: img4,
      heading: "Greece",
      text:"THis is the world most beautifull country "
    },
    {
      image: img5,
      heading: "Sweden",
      text:"Perfect for family holiday amaizing food "
    },
  ];

  return (
    <div className="wrap">
      {myArray.map((item,index)=> {
        return <Cards key ={index} image ={item.image} heading={item.heading}text = {item.text}/>
      })}
    </div>
  )
}
export default Imges;
