import { useState, useEffect } from 'react';
import './todo.css';
import React from 'react';

export default function Todo (props) {

    const [isTaskCompleted , setIsTaskCompleted] = useState(false)
    useEffect(( ) => {
      console.log('useEffect is runing')
    },[isTaskCompleted])
    
    const scratchedText = {
        color : 'red',
    }
    
    return (
        <div className="wrapper">
            <p style={ isTaskCompleted ? scratchedText  : {}}>{props.task}</p>
            <button 
            onClick={
                () => props.deleteFunction (props.task)
                
                }>
            Delete</button>

            <button
                onClick={()=>setIsTaskCompleted(true)}
            >Complete</button>
        </div>
    )
}