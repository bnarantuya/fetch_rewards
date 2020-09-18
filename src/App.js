import React, { useEffect, useState } from 'react'
import './App.css'
import List from './components/List/List'

function App({ initialList = [] }) {
  const [list, setList] = useState(initialList)

  useEffect(() => {
    //Getting data from simple express
    fetch('/api')
      .then(res => res.json())
      .then(res => {
        //Filtering items and group them by groupId
        let result = groupBy(res)
        //Sorting every group by their id(name was same with ID)
        result = result.map(item => item.sort(function (a, b) { return a.id - b.id; }))
        setList(result)
      })
      .catch(err => console.log(err))
  }, [])

  //Grouping 
  const groupBy = list => {
    //FOR READABILITY
    /*
    const group = [];
    for(let i=0; i<list.length; i++) {
      const listItem = list[i];
      if(listItem.name) {
        if(group[listItem.listId-1]) 
          group[listItem.listId-1].push(listItem);
        else 
          group[listItem.listId-1] = [listItem];
        
      }
    }
    return group;
  */
    return list.reduce((group, item) => {
      if (item.name) {
        if (group[item.listId - 1]) group[item.listId - 1].push(item)
        else group[item.listId - 1] = [item]
      }
      return group
    }, []);
  }

  return (
    <div className="App">
      <h1 className="title">Fetch <span className="orangeSpan">Rewards</span> coding assessment</h1>
      {list.length > 0 ?
        (
          <div className="listContainer">
            {list.map((item, index) => (
              <List list={item} key={index} />
            ))}
          </div>
        ) : (
          <div className="Empty">List is empty</div>
        )}
    </div>
  )
}

export default App
