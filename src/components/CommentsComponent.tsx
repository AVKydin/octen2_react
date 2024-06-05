import React, {FC, useEffect, useState} from 'react';
import {ICommentModel} from "../models/ICommentModel";
import {userApiService} from "../services/api.services";
import CommentComponent from "./CommentComponent";

const CommentsComponent:FC = () => {

    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        userApiService.getAllComments().then(({data}) => setComments(data))
    }, []);

    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;
