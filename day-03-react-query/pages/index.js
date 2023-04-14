import React, {useState} from 'react';
import axios from "axios";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import Link from "next/link";

const Home = () => {

    const queryClient = useQueryClient();

    const getAllTodos = async () => {
        try {
            const res = await axios.get('http://localhost:3000/todos')
            return res.data;
        } catch (error) {
            return Promise.reject(new Error('Oh no!'))
        }
    }

    const {
        data: todos,
        isLoading,
        isError,
        isSuccess,
        error,
        refetch,
    } = useQuery({
        queryKey: ['get', 'todos'],
        queryFn: getAllTodos,
    },)


    const createNewTodo = async ({
                                     taskName,
                                     isFinished,
                                 }) => {
        try {
            const res = await axios.post('http://localhost:3000/todos', {
                taskName,
                isFinished,
            })
            return res.data
        } catch (error) {
            return error
        }
    }

    const {mutate} = useMutation({
        mutationKey: ['post', 'todos'],
        mutationFn: createNewTodo,
    })


    const [taskValue, setTaskValue] = useState('')

    const onCreateNewTodo = () => {
        mutate({
            taskName: taskValue,
            isFinished: false,
        }, {
            onSuccess: async () => {
                await queryClient.invalidateQueries({
                    queryKey: ['get', 'todos'],
                })

                // queryClient.cancelQueries({
                //     queryKey:[]
                // })

                // await refetch()
            },
        })
    }


    return (
        <div className="mx-14  mt-6">
            <input className="mb-6" type="text" onChange={e => setTaskValue(e.target.value)}/>
            <button className="bg-red-500 text-white px-2 py-2" onClick={onCreateNewTodo}>Add new todo</button>

            {isLoading && "loading..."}
            {isError && 'Something want wrong please try again later'}
            {isSuccess && todos.length <= 0 && 'No todo to show'}
            {isSuccess && todos.length > 0 && todos.map(todo => {
                return <li key={todo.id}>
                    <Link href={`/${todo.id}`}>{todo.id} - {todo.taskName}</Link>
                </li>
            })}

        </div>
    );
};

export default Home;
