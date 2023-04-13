import React from 'react';
import {useRouter} from "next/router";

const BlogPostById = () => {
    const router = useRouter()
    const {id} = router.query

    console.log(id)
    return (
        <div>
            Blog post by {id}
        </div>
    );
};

export default BlogPostById;
