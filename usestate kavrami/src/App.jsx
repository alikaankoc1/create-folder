import React, { useState } from 'react'

function App() {
  const [firstName , setfirstName] = useState("ali");
  const [lastName, setlastName] = useState("koc");
  return (
  <div>
    {firstName} {lastName}
  </div>
  )
}

export default App