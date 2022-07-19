import React from "react";

const Todo = ({ text, todo, id, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(
      todos.filter((el) => {
        return el.id !== todo.id;
      })
    );
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
      <button onClick={completeHandler} className="completed-btn">
        {/* <i className="fa-solid fa-check-double"></i> */}
        <i className="fa-solid fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        {/* <i className="fa-solid fa-trash-can"></i> */}
        {/* <i className="fa-solid fa-trash"></i> */}
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};

export default Todo;
