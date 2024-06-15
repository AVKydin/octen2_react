import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";

interface Iprops {
    post: IPostModel
}

const PostComponent: FC<Iprops> = ({post}) => {
    return (
        <div>
            <span>{post.id} - {post.title}</span>
        </div>
    );
};

export default PostComponent;
