import React from 'react'

function Product(props) {
  return (
    <div>
        <div>Ürün Bilgileri</div>
        <div>
            <div>Ürün Adı: {props.productName}</div>
            <div>Ürün Fiyatı: {props.price}</div>
        </div>
    </div>
    
  )
}

export default Product