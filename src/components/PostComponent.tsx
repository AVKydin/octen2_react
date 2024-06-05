import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";

interface IPostProps {
    post: IPostModel
}


const PostComponent:FC<IPostProps> = ({post}) => {
    return (
        <div>
                <span>{post.id} - </span>
                <span>{post.title} - </span>
                 <span>{post.body}</span>
</div>
)
    ;
};

export default PostComponent;
