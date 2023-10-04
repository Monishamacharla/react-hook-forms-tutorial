import React, { useState, ChangeEvent } from 'react'




export const Statechange = () => {

    const [name, setName] = useState("");
    const [counter, setCounter] = useState(0);
  

    const increment = () => {
        setCounter(counter + 3);
    };


     let onchange = (event: ChangeEvent<HTMLInputElement>) => {
      const newName = event.target.value;
      setName(newName);
    };



    return (
      <div>
        <label>Hallo, My name is:  {name} </label>
        <input type="text" onChange={onchange} value={name} placeholder='enter your name' />
        {counter}
        <button onClick={increment}>Add</button>
      </div>
    );
 } 

 export default Statechange;


