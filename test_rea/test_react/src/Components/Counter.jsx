import React, { useState } from 'react'

const Counter = () =>{

    const [counter,setcounter] = useState(0);

    function incre(){
        setcounter = counter++
    }

    function decre(){
        setcounter = counter--
    }
    return (
        <div>
            <button onClick={incre}>increment</button>
            <button onClick={decre}>decrement</button>
        </div>
    )
}

export default Counter