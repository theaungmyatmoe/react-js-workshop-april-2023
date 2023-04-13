import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useUsername} from "@/contexts/UsernameContext";

const About = () => {
    const router = useRouter()

    const {username, changeUsername} = useUsername()

    console.log(username)

    console.log(username)

    return (
        <div>
            About page
            <div>
                <button
                    onClick={() => router.back()}
                    className="px-3 py-2 bg-zinc-900 text-white">Go back
                </button>
            </div>
        </div>
    );
};

export default About;
