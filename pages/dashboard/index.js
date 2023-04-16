import React, {useContext, useEffect} from 'react';
import {AuthContext} from "@/contexts/AuthContext";
import {useRouter} from "next/router";

const DashboardHome = () => {
    const router = useRouter()
    const {isAuthenticated} = useContext(AuthContext)

    useEffect(() => {
        if(!isAuthenticated){
            router.push('/auth/sign-in')
        }
    },[])

    return (
        <div>
            Dashboard home
        </div>
    );
};

export default DashboardHome;
