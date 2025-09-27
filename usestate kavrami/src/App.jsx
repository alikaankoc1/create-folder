import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const summary = () =>{
    setCount (count+2)
  }
  return (
   <div>
   <div>
    {count}
    <button onClick={summary}> tıkla değer artacak mı ?</button>
   </div>
   </div>
  )
}

export default App