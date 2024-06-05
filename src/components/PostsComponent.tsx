import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import {userApiService} from "../services/api.services";
import PostComponent from "./PostComponent";

const PostsComponent:FC = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        userApiService.getAllPosts().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;
