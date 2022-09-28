import { Button, ButtonGroup } from '@chakra-ui/react'
import { DeleteIcon,UnlockIcon } from "@chakra-ui/icons";

const TodoItems = ({id,title, status, handleToggle, handleDelete}) => {
    return (
        <div>
 <div key={id} className="Todos">
                <h1>{title}</h1>
                <h1>{status ? "Completed" : "Not Completed"}</h1>
                <Button colorScheme='white' onClick={() => handleToggle(id)}><UnlockIcon color="purple" w={6} h={6} /></Button>
                <Button colorScheme='white' onClick={() => handleDelete(id)}><DeleteIcon color="red.500" w={6} h={6} /></Button>
            </div>
        </div>
    )
}


export default TodoItems;