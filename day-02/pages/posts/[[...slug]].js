import React from 'react';
import {useRouter} from "next/router";

const Post = () => {
    const router = useRouter()

    console.log(router)
    return (
        <div>
            Hello world
        </div>
    );
};

export default Post;
