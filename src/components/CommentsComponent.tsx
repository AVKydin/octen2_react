import React from 'react';
import CommentComponent from "./CommentComponent";
import {useStore} from "../zustandStore/zustandStore";

const CommentsComponent = () => {

    const {commentStore: {allComments}} = useStore()

    return (
        <div>
            {
                allComments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;
