import React from 'react'

function Product(props) {
  return (
    <div>
      <div>ÜRÜN BİLGİLERİ</div>
      <div>
        <div>{props.productName}</div>
        <div> {props.price} </div>
      </div>
    </div>
  )
}

export default Product