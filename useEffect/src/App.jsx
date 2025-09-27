import React, { useEffect, useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState("ali");
  const [lastName, setLastName] = useState("KOÇ");
  const handleChange = ()=>{
     setFirstName("kaan");
  }
  const newhandleChange = () =>{
    setLastName("keçi")
  }
  // useEffect
  useEffect(() =>{
    console.log("Her zaman çalışır.");
  })
  useEffect(()=>{
    console.log("ilk render edildiğinde çalışır");
  },[])
  useEffect(()=>{
    console.log("ilk render edildiğinde ve FIRSTNAME stati değiştiğinde çalışır");
  }, [firstName])
  useEffect(()=>{
    console.log("ilk render edildiğinde ve LASTNAME stati değiştiğinde çalışır");
  },[lastName])
  return (
    <div>
      <div>
        <div>{firstName}</div>
        <div><button onClick={handleChange}>tıkla</button></div>
      </div>
      <div>
        <div>{lastName}</div>
        <div><button onClick={newhandleChange}>2. kez tıkla</button></div>
      </div>
    </div>
  )
}

export default App