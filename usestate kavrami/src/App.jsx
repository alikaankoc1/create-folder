import React, { useState } from 'react'

function App() {
  const [firstName , setfirstName] = useState("Champions");
  
  return (
  <div >
    <div>
 {firstName}
    </div>
    <div><button onClick={()=>{setfirstName("Konyaspor")}}>Butona Tıkla</button></div>
   
  </div>
  )
}

export default App