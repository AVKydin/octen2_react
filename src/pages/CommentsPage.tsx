import React, {useEffect, useState} from 'react';
import CommentsComponent from "../components/CommentsComponent";
import {useParams} from "react-router-dom";
import {ICommentModel} from "../models/ICommentModel";
import {userApiService} from "../services/api.services";

const CommentsPage = () => {

    const {id} = useParams();

    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        if(id) {
            userApiService.getCommentsOfPost(id).then(value => setComments(value.data))
        } else {
            userApiService.getAllComments().then(({data}) => setComments(data))
        }
    }, [id]);

    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;
