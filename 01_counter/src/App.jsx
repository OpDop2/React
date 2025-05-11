import { useState, useReducer, useCallback } from "react";

function App() {
  const [counter, setCounter] = useState(0)
  const addValue = () => {
   if(counter < 20){
    setCounter(counter + 1)
   }
   
  } 
  const removevalue = () => {
    if(counter > 0)   bsetCounter(counter - 1)
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2> 

      <button onClick={addValue}>Add Value </button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  );
}
export default App