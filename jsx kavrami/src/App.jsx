import React from 'react'

function App() {
  let isimler =  ["ali ", "ayşe"];
  return (
    <div>
    {isimler.map((isim) =>(
      <div style={{textAlign: "center", paddingLeft:"250px"}}>isimler: {isim}</div>
    ))}
    </div>
  )
}
export default App