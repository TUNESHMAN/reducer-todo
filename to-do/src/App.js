import React from "react";
import "./App.css";
import ListTask from "./Components/ListTask";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };

    this.deleteTask = this.deleteTask.bind(this);
    this.setUpdate=this.setUpdate.bind(this)
  }

  handleInput = e => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  };

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: ""
        }
      });
    }
  };

  deleteTask(key) {
    const filteredTask = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredTask
    });
  }

  setUpdate(text, key) {
    const item = this.state.items;
    item.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items:item
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter Task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">ADD TASK</button>
          </form>
        </header>
        <ListTask
          items={this.state.items}
          deleteTask={this.deleteTask}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}

export default App;
