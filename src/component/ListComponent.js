import React from "react"

const List = (props) =>{

const items = props.items

const itemList = items.map(function (item) {
    return <div key={item.key}>

<input type="text" key={item.key} value = {item.text} onChange={(e)=>props.setUpdate(e.target.value,item.key)}></input>
    <button type="submit" onClick={()=> props.deleteButton(item.key)}>delete</button>


  

    </div>
})

    return(
        <div>
{itemList}
        </div>
    )
}
export default List 