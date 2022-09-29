import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ id: Math.floor(Math.random() * 10000), text: input });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <div>
          <input
            type="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
            placeholder="Update your todo"
            value={input}
            name="text"
          />
          <button className="todo-button edit">Update</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
            placeholder="Add a todo"
            value={input}
            name="text"
          />
          <button className="todo-button">Add Todo</button>
        </div>
      )}
    </form>
  );
};

export default TodoForm;
