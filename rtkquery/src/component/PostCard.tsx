import React from 'react'
const PostsCard = ({post}:{post:Post})=>{
    return (
    <>
        <h1>{post.title}</h1>
        <h1>{post.body}</h1>
    </>
    )
}

export default PostsCard;