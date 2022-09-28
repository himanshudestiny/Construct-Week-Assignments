import { useState } from "react";
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const AddTodo = ({handleAddTodo}) => {
    const [text, setText ] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const onClick = () => {
        handleAddTodo({text});
        setText("");
    }
    return (
        <div>
<div className="AddTodo">
        <Input placeholder='Enter Todo' value={text} onChange={handleChange}/>
        <Button colorScheme='blue' onClick={onClick}>Add</Button>
       </div>
       <div className="Text">
        <h1>{text}</h1>
       </div>
        </div>
    )
}


export default AddTodo;