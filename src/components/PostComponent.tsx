import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";

interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <span>{post.id} - {post.title}</span>
        </div>
    );
};

export default PostComponent;
