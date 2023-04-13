import React, {useEffect} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const Login = () => {
    const router = useRouter()

    const onLoginClick = async () => {
        // api user data send
        // api resposne -> success , fail

        await router.push('/dashboard')
    };

    useEffect(() =>{
        router.prefetch('/dashboard')
    },[])

    return (
        <div>
            Login page
            <button
                onClick={onLoginClick}
                className="text-green-500">Login</button>
            <button className="text-red-500">Logout</button>
        </div>
    );
};

export default Login;
