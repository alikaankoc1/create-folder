import React, { useState } from 'react'

function App() {
  const [firstName, setfirstName] = useState("ali");
  const handleChange = () => {
    setfirstName("afgasdfgasg");
  }
  return (
    <div>
      <div>{firstName}</div>
      <div>
        <button onClick={handleChange}>butona tıkla</button>
      </div>
    </div>
  )
}

export default App