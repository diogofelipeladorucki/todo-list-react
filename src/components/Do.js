import React, { useState } from "react";

const Do = () => {
  const [todosArr, setTodos] = useState([]);
  const [todoText, setTodoText] = useState([]);

  function handleChangeTodoText(e) {
    let task = e.target.value;
    setTodoText(task);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (todoText.length) setTodos([...todosArr, todoText]);

    setTodoText("");
  }

  return (
    <div>
      <h1>Do</h1>
      <input
        type="text"
        value={todoText}
        placeholder="Enter your todo"
        onChange={handleChangeTodoText}
      />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
          {todosArr.map(item => (<p>{item}</p> ))}
    </div>
  );
};

export default Do;
