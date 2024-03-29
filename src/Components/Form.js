import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus}) => {
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form action="">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        name=""
        id=""
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fa-solid fa-plus"></i>
      </button>
      <div className="select">
        <select onClick={statusHandler} name="todos" className="filter-todo" id="">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};


export default Form;
