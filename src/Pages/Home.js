import React, { useState } from "react";
import TodoItem from "../Components/TodoItem";

function Home(){

const [todos,setTodos] = useState([]);
const [input,setInput] = useState("");

const addTodo = () => {
  if(input.trim()==="") return;
  const newTodo = {id:Date.now(), text:input};
  setTodos([...todos,newTodo]);
  setInput("");
}

const deleteTodo = (id) => {
  setTodos(todos.filter(t=>t.id!==id));
}

const updateTodo = (id) => {
  const newText = prompt("Yeni görev:");
  setTodos(todos.map(t => t.id===id ? {...t,text:newText}:t));
}

return(
<div className="container">
<h1>TODO APP</h1>

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Görev gir"
/>

<button onClick={addTodo}>Ekle</button>

<div>
{todos.map(todo=>(
<TodoItem
key={todo.id}
todo={todo}
deleteTodo={deleteTodo}
updateTodo={updateTodo}
/>
))}
</div>

</div>
);
}

export default Home;
