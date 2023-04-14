import React from 'react';
import {useRouter} from "next/router";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const getTodoById = async (id) => {
    const res = await axios.get(`http://localhost:3000/todos/${id}`)
    return res.data;
}

const TodoById = () => {
    const router = useRouter()
    const {id} = router.query;


    const {data: todo, isLoading, isError, isSuccess} = useQuery({
        queryKey: ['get', 'todos', id],
        queryFn: () => getTodoById(id),
        enabled: !!id,
    })

    return (
        <div>
            {isLoading && 'Loading...'}
            {isError && 'error '}
            {isSuccess && <div>
                <li>{todo.id} - {todo.taskName}</li>
            </div>}
        </div>
    );
};

export default TodoById;
