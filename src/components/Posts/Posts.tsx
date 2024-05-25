import React, {FC} from 'react';
import {IPostProps} from "../../models/PostModel";
import Post from "../Post/Post";

export interface IPosts {
    posts:IPostProps[]
}

const Posts:FC<IPosts> = ({posts}) => {
    return (
        <div>
            {
                posts?.map(post=><Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;
