import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {IPostModel} from "../models/IPostModel";
import PostsComponent from "../components/PostsComponent";
import {userApiService} from "../services/api.services";


const PostsPage = () => {

    const {userId, postId} = useParams();

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        if(userId){
            userApiService.getPostsOfUser(userId).then(value => setPosts(value.data))
        } else {
            userApiService.getAllPosts().then(({data}) => setPosts(data))
        }
    }, [userId, postId]);

    return (
        <div>
            <PostsComponent posts={posts}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;
