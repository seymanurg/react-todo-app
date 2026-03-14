import React from "react";

function TodoItem({ todo, deleteTodo, updateTodo }) {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <div>
        <button className="update" onClick={() => updateTodo(todo.id)}>Güncelle</button>
        <button className="delete" onClick={() => deleteTodo(todo.id)}>Sil</button>
      </div>
    </div>
  );
}

export default TodoItem;
