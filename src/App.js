import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./component/ListComponent"

const App = () =>{

const [items,setItems] = useState([])
const [currentItem,setCurrentItem] = useState({text:"",key:""})


const handleChange = (e) => {
  


  setCurrentItem({text:e.target.value,key:Date.now()})
  console.log(currentItem)
}


const addButton = (e) =>{
e.preventDefault()


if(currentItem.text !== ""){
const newitems = [...items, currentItem]

setItems(newitems)

setCurrentItem({text:"",key:""})

}


}

const setUpdate = (text,key) =>{
items.map(item=>{
  if(item.key === key){
item.text = text
setCurrentItem({text:text})
  }

  setCurrentItem({text:"",key:""})

})

}


const deleteButton = (key) =>{
const filterItem = items.filter(item=>(item.key !== key))
  setItems(filterItem)
}



  return(
    <div>
      <form onSubmit={addButton}>
 <input type ="text" value={currentItem.text} onChange={handleChange}/>
 <button type="submit">Add</button>
 </form>

<List items={items} setUpdate={setUpdate} deleteButton={deleteButton}>

</List>



    </div>
  )
}





export default App;
