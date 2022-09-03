import React from "react"

export default function Item({lista, stock, updateCount}) {

  function buy(e) {
    if(stock>=1) {
      stock = stock-1;
      lista.stock = stock;
      updateCount()
    }else {
      e.currentTarget.disabled = true;
    }
  }


  return ( 
        <div className='producto'>
          <h3>{lista.producto.nombre}</h3>
          <p>{lista.producto.descripcion}</p>
          <h5>En stock: { stock > 0 ? (stock): <span>agotado</span> }</h5>
          { stock > 0 ? <button onClick={buy}>Comprar</button> : <button disabled>Sin stock</button>}
        </div>
  )
}