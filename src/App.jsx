import React from 'react';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [outputs, setOutputs] = useState([]);
  const [add, setAdd] = useState(0);

 const setInputValue = (e) => {
    setInput(e.target.value);
  }

    const incrementValue = () => {
      if (document.querySelector("#input").value === "") {
        alert("Please enter a todo")
        }else{
      setAdd((add) => add + 1)
    }
        }

    const decrementValue = () => {
      if (add > 0 ) {
        setAdd((add) => add - 1)
          }
      }


  const addTodo = () => {
  
      const objectItem = {
      id : Math.floor(Math.random() * 1000),
      value : input,
      status: false
    }
    setOutputs(oldOutput => [...oldOutput, objectItem])
    setInput('');
  }

  const deleteOutput = (id) => {
    const newOutputList = outputs.filter(output => output.id !== id)
    setOutputs(newOutputList)
  };

  const doneBtn = (id) => {
    const thisIndex = outputs.findIndex(
      output => output.id === id
    )
   const tempOutputs = [...outputs]
   tempOutputs[thisIndex].status = true;
   setOutputs(tempOutputs)
    };

  const listItems = 
    outputs.map(output => {
      return (
        <li key={output.id} style={{textDecoration: output.status ? "line-through" : "", color: output.status ? "red" : "", display: output.value ? "Hello" : "none" }}>{output.value}<button className='deleteBtn' onClick={()=> {deleteOutput(output.id), decrementValue()}}>❌</button><button className= "doneBtn" onClick={() => doneBtn(output.id)}>✔</button></li>
      )
    })
    

  return (
    <div>
      <h1>Cleto Todo App</h1>
      <div className="App">
      <span >Total: {add}</span>
      <input type="text" id='input' maxLength={30} size={30}  value={input} onChange={setInputValue} placeholder='Add todo'/>
      <button className="submit" onClick={() => {addTodo(), incrementValue()}}>Submit</button>
      <hr />
      <ul>
      {listItems}
      </ul>
      </div>
    </div>
  )
}

export default App;

