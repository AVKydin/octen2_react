import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import {Link} from "react-router-dom";

interface IPostProps {
    post: IPostModel
}


const PostComponent:FC<IPostProps> = ({post}) => {
    return (
        <div>
            <Link to={post.id.toString()}>
                <span>{post.id} - </span>
                <span>{post.title} - </span>
                 <span>{post.body}</span>
            </Link>
        </div>
)
    ;
};

export default PostComponent;
