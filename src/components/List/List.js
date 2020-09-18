import React from 'react'
import './List.css'
import Item from '../Item/Item'
function List({ list }) {
  return (
    <div className="list" data-testid='list-test-id'>
      <div className="title">
        List ID: {list[0].listId}
      </div>
      <div className="listBorder">
        {list.map((item, index) => (
          <Item
            item={item}
            key={item.id}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default List
