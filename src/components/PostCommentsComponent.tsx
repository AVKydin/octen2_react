import React, {useEffect, useMemo, useState} from 'react';
import {useContextProvider} from "../context/ContextProvider";
import {IPostWithComponentsType} from "../models/IPostWithComponentsType";

const PostCommentsComponent = () => {

    const {postStore: {allPosts}, commentStore: {allComments}} = useContextProvider();
    const [postWithComponentsState, setPostWithComponentsState] = useState<IPostWithComponentsType[]>([])

    const postWithComponentsArray = useMemo(() => {
        return ()=>{
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comment => comment.postId === post.id)}
            })
        }
    }, [allPosts, allComments])

    useEffect(() => {
        setPostWithComponentsState(postWithComponentsArray)
    }, [postWithComponentsArray]);

    return (
        <div>
            {
                postWithComponentsState.map(post => <div key={post.id}>
                    <div>{post.title}</div>
                    <ul>
                        {
                            post.comments.map(comment => <li key={comment.id}>{comment.name}</li>)
                        }
                    </ul>
                </div>)
            }
        </div>
    );
};

export default PostCommentsComponent;
