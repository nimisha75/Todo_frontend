import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);

  const handleChange = event => {
    setInput(event.target.value);
  };

  const storeItem = event => {
    event.preventDefault();
    setItem([...item, input]);
    setInput("");
  };

  const deleteItem = key => {
    setItem(item.filter((data, index) => index !== key));
  };

  const editItem = () => {
    // Implement edit functionality here
  };

  return (
    <div className="todo-container">
      <form className="input-selection" onSubmit={storeItem}>
        <h1>Todo App</h1>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter the items"
        />
      </form>
      <ul>
        {item.map((data, index) => (
          <li key={index}>
            {data}
            <i className="fa-solid fa-pen-to-square" onClick={editItem}></i>
            <i className="fa-solid fa-trash-can" onClick={() => deleteItem(index)}></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
