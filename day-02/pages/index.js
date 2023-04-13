import React, {createContext, useContext, useEffect} from 'react';
import Link from "next/link";
import {useUsername} from "@/contexts/UsernameContext";


const Home = () => {
    const {username, changeUsername} = useUsername()

    console.log(username)
    useEffect(() => {
        changeUsername("Mg Mg")
    }, [])
    console.log(username)
    return (
        <div>
            <h1 className="text-lg font-bold">Home page</h1>
            <div>
                <Link href="/about">Go to Login Page | </Link>
                <Link href="/about">Go to About Page | </Link>
                <Link href="/contact">Go to Contact Page</Link>
            </div>
        </div>
    );
};

export default Home;
