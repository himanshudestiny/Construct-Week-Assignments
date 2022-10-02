import { getTodos, addTodo, deleteTodo } from "./api.js";
import { useState, useEffect } from "react";
import AddTodos from "./AddTodos";


// const getData = () => {
//    getTodos().then((res) => res.json());
// }



const Todos = () => {
    const [ todos, setTodos ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ status, setStatus ] = useState(false);

    const getTodosAndAppend = (page) => {
        getTodos({page, limit:5, sort:"title", order:"asc"})
        .then((res) => setTodos(res.data))
        .catch((err) => console.log(err))
        .finally(() => console.log("Call Completed"));
    };

    useEffect(() => {
        getTodosAndAppend(page);
    },[page])
    
    const handleAddTodo = (todos) => {
        addTodo(todos).then(() => getTodosAndAppend(page));
    }

    const handleDeleteTodo = (id) => {
        deleteTodo(id).then(() => getTodosAndAppend(page))
    }

    const handleToggle = (id) => {
        const toggledTodos = todos.map((todo) => 
        todo.id===id ? {...todo, status: !todo.status} : todo);
        setTodos(toggledTodos);
        getTodosAndAppend(page)
        }

    return (
    <div>
        <AddTodos onAddTodo={handleAddTodo}/>
        <h1>Todos</h1>
        { todos.map((todo) => (
            <div key = {todo.id} style={{display:"flex", margin:"auto", justifyContent:"space-between", width:"50%", marginTop:"10px"}}>
                <h2>{todo.title}</h2>
                <h3>{status===false ? "Not Completed" : "Completed"}</h3>
                <button style={{height:"30px", marginTop:"15px"}} onClick={() => handleToggle(todo.id)}>Toggle Status</button>
                <button style={{height:"30px", marginTop:"15px"}} onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </div>
        ))}
        <div>
            <button disabled={page===1} onClick={() => setPage(page-1)}>PREV</button>
            <button>{page}</button>
            <button onClick={() => setPage(page+1)}>NEXT</button>
        </div>
    </div>
    )
}
export default Todos;