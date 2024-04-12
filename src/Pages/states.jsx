import React, { useState } from 'react'
import './states.scss'

const States = () => {

   const [counter, setCounter] = useState(0);
   const [input, setInput] = useState("simon")
   const [showText, setShowText] = useState(true)

   const increment = () => {
      setCounter(counter + 1)
   }
   const decrement = () => {
      setCounter(counter - 1)
   }
   let onChange = (event) => {
      const newValue = event.target.value;
      setInput(newValue)
   }


   return (
      <>

         <div className='holder'>
            <h1>useEffect hook</h1>
            <div>
               <input type="text" placeholder='type text....' onChange={onChange} />
               {input}
            </div>
            <div className="button">

               <button onClick={increment}>increment</button>
            </div>
            {counter}

            <div className="decrement">
               <button onClick={decrement}>decrement</button>
            </div>

         </div>
         <div className="holder">
            <h1>useReducer hook</h1>
            {counter}
            <div className="button">

               <button onClick={() => {
                  setCounter(counter + 1)
                  setShowText(!showText)

               }}>click  me</button>
               {showText && <h4>hello my name i simon</h4>}
             
            </div>
         </div>
      </>
   )
}

export default States 