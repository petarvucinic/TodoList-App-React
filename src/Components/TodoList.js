import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} id={todo.id} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
