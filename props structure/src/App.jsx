import React from 'react'
import Product from './Product'

function App() {
  const dataBase = "Buzdolabı";
  return (
    <div>
    <Product productName = "Ayakkabı" price = {3200}/> 
    <hr />
    <Product productName ="Pantolon" price ={1100}/>
    <hr />
    <Product productName = {dataBase} price ={56000}/>
    </div>
  
  )
}

export default App