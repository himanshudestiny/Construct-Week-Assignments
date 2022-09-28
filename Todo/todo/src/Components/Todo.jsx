import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";


 const Todo = () => {
    
    const [todos, setTodos ] = useState([]);
    
const handleAddTodo = ({text}) => {
    const newTodo={
        title: text,
        status: false,
        id: new Date().toDateString()+text
    };
    setTodos([...todos, newTodo]);
}

const handleToggle = (id) => {
const toggledTodos = todos.map((todo) => 
todo.id===id ? {...todo, status: !todo.status} : todo);
setTodos(toggledTodos);
}

const handleDelete = (id) => {
const deletedTodos= todos.filter((todo) => {
    return todo.id != id;
})
setTodos(deletedTodos);
}

    return (
        <div>
       <AddTodo handleAddTodo={handleAddTodo}/>
       <div>
        <h1>
        </h1>
       </div>
       <div>
        {todos.map((item) => (
           <TodoItems key={item.id} title={item.title} status={item.status} id={item.id} handleToggle={handleToggle} handleDelete={handleDelete}/>
        ))}
       </div>
       </div>
    )
}

export default Todo;

