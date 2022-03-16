import { useState } from "react";
const State = () => {
  const [person, setPerson] = useState([
    { name: "dan", age: "34" },
    { name: "Ben", age: "27" },
  ]);
  const handleClick = (name) => {
    console.log(`hello ${name}`);
  };
  return (
    <div>
      <h1>im state</h1>
      <Person name={person[1].name} age={person[1].age} clickMe={handleClick} />
      <Person name={person[0].name} age={person[0].age} clickMe={handleClick} />
    </div>
  );
};
export default State;

const Person = ({ name, age, clickMe }) => {
  return (
    <div>
      <h1>{name} </h1>
      <h1>{age}</h1>
      <button onClick={() => clickMe(name)}>clicker</button>
    </div>
  );
};
