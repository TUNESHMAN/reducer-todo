import React from "react";
import '../Components/Listitem.css'


function ListTask(props) {
  const items = props.items;
  const listItems = items.map(item => {
    return (
      <div className="list" key={item.key}>
        <p>{item.text}</p>
        <span>
            
        </span>
        <button className="btn" onClick={()=>props.deleteTask(item.key)}>CLEAR TASK</button>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default ListTask;
