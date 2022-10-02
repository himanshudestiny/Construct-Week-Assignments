
import { useState, useEffect } from "react";

const AddTodos = ({onAddTodo}) => {

    const [ formState, setFormState ] = useState({
        title:"",
        status:""
    });

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormState({ ...formState, 
            [name] : value }   
        )
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      onAddTodo(formState);
    }

    return (
       <div>
        <form action="" onSubmit={handleSubmit}>
            <label>
                <input name="title" type="text" placeholder="Enter Todo" value={formState.title} onChange={handleChange} />
            </label> <br /> <br />
            <label>
                <input name="status" type="text" placeholder="Enter Status" value={formState.status} onChange={handleChange}  />
            </label> <br /> <br />
            <label>
                <input type="submit" placeholder="Enter Status" value="Add Todo"/>
            </label>
        </form>
       </div>
    )
}

export default AddTodos;