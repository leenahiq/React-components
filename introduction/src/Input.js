import { useState } from "react";

const Input = () => {
    const [userInput, setUserInput] = useState("");
    const changeHandler = (event) => {
        setUserInput(event.target.value);
    };
    return (
        //cant have Id and classes cant be style
        <>
            <h1>hello</h1>
            <input onChange={changeHandler}></input>
            <h2>{userInput}</h2>
        </>
    );
};

export default Input;
