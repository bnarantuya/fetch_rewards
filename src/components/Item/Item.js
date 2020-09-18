import React from 'react'
import './Item.css'
function Item({ item, index }) {
  return (
    <div className={index % 2 ? 'item oddItem' : 'item evenItem'}>
      <span aria-label="item-name">{item.name}</span>
    </div>
  )
}

export default Item
