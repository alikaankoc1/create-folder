import React from 'react'

function Product(props) {
  return (
    <div>
      <div>ÜRÜN BİLGİLERİ</div>
      <div>
        <div>Ayakkabı: {props.productName}</div>
        <div>Fiyat: {props.price} </div>
      </div>
    </div>
  )
}

export default Product