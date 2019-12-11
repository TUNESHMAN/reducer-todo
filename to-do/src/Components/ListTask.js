import React from "react";
import '../Components/Listitem.css'


function ListTask(props) {
  const items = props.items;
  const listItems = items.map(item => {
    return (
      <div className="list" key={item.key}>
        <p>
        <input type="text" 
        id ={item.key} 
        value={item.text}
        onChange={(e)=>{
            props.setUpdate(e.target.value, item.key)
        }}/>
        <span>
        <button className="btn" onClick={()=>props.deleteTask(item.key)}>CLEAR</button>
        </span>
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default ListTask;
