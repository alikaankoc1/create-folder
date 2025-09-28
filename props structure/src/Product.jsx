import React from 'react'

function Product(props) {
  return (
    <div>
      <div>
        <p>Bugün hava {props.status}</p>
      </div>
    </div>
  )
}

export default Product