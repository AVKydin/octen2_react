import React, {FC} from 'react';
import {IPostProps} from "../../models/PostModel";

interface IProps {
    post: IPostProps
}

const Post:FC<IProps> = ({post}) => {
    return (
        <div>
            <h3>{post.body}</h3>
        </div>
    );
};

export default Post;
