import {useState} from 'react';
// useState basics
// its a react how adds state to functional component
// return an array with 2 values
// 1. Current state values
// 2. Function to update state
// Syntax:
// const [statevalue, setStateValue] = useState(initialValue);

export function UseStateBasics(){
    // counter
    const [count, setCount] = useState(0);
    // cart
    const [cart, setCart] = useState(0);
    return(
        <>
        <h2>useState Basics</h2>
        <p>Count: {count}</p>

        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}