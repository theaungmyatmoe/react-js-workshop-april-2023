import {useEffect, useState} from "react";
import axios from "axios";

export const useFetch = (url) => {
    const [state, setState] = useState({
        isLoading: false,
        isFetching: false,
        isError: false,
        data: [],
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                setState(prevState => {
                    return {
                        ...prevState,
                        isLoading: true,
                        isFetching: true,
                        data: [],
                    }
                })
                const res = await axios.get(url)
                setState(prevState => {
                    return {
                        ...prevState,
                        isLoading: false,
                        isFetching: false,
                        data: res.data,
                    }
                })
            } catch (error) {
                setState(prevState => {
                    return {
                        ...prevState,
                        isLoading: false,
                        isError: true,
                        error,
                    }
                })
            }
        }

        fetchData()

    }, [])

    return state;
}
