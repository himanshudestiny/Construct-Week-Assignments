import axios from "axios";


export const getTodos = (params ={}) => {
    return axios.get(`http://localhost:3000/todos`, {
        params: {
            _page:params.page,
            _limit:params.limit,
            _sort:params.sort,
            _order:params.order
        }
    });
}

export const addTodo = (data ={}) => {
    return axios.post(`http://localhost:3000/todos`, {
        title:data.title,
        status:data.status
    });
};



export const deleteTodo = (id) => {
    return axios({
        method: "DELETE",
        baseURL: "http://localhost:3000",
        url: `/todos/${id}`
    });  
};
