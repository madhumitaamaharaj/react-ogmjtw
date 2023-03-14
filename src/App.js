
import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import Todo from './todo';


function App() {

const [todoData,setTodoData] = useState([])


const [task , setTask] = useState('')


function handleChange (e) {
    
  const newTask = e.target.value  
 
  setTask(newTask)
}

function handleSubmit () {
  
  const exitingTodos = [...todoData,task]
  setTodoData(exitingTodos)
}

function removeTask (taskToDelete) {
  
}



  return (
    <div className="App">
      <div>
        <input onChange={handleChange}/> 
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {
        todoData.map((ele,index) => (
         
          <Todo 
            task = {ele}
            deleteFunction = {removeTask}
          />
        ))
      }

      
    </div>
  );
}

export default App;
