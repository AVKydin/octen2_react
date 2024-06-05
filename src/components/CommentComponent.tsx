import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";

interface ICommentProps {
    comment: ICommentModel
}

const CommentComponent:FC<ICommentProps> = ({comment}) => {
    return (
        <div>
            <span>{comment.id} - </span>
            <span>{comment.name} - </span>
            <span>{comment.body}</span>
        </div>
    );
};

export default CommentComponent;
