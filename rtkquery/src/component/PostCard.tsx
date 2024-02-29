import React from 'react'
const PostsCard = ({post}:{post: Post})=>{
    return (
    <div>
        <h1>{post.title}</h1>
        <h1>{post.body}</h1>
    </div>
    );
};

export default PostsCard;