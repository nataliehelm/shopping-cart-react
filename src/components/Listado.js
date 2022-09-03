import React from 'react'
import data from './data.json'
import Item from './Item'

export default function Listado({updateCount}) {
  return (
    <div className='container'>
      {data.map((item) =>
        <Item lista={item} stock={item.stock} key={item.id} updateCount={updateCount}/>
      )}
    </div>
  )
}
