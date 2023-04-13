import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useFetch} from "@/hooks/useFetch";

const Home = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    const [todo, setTodo] = useState({})
    const {isLoading, isFetching, data, isError} = useFetch(url)

    console.log(isLoading)

    useEffect(() => {
        setTodo(data)
    }, [data])

    return (
        <div>
            {isLoading && 'Loading...'}
            {!isLoading && todo.title}
        </div>
    );
};

export default Home;
