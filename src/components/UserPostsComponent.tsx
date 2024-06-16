import React, {useEffect, useMemo, useState} from 'react';
import {useStore} from "../context/ContextProvider";
import {IUserWithPostsType} from "../models/IUserWithPostsType";

const UserPostsComponent = () => {

    const {postStore: {allPosts}, userStore: {allUsers}} = useStore();
    const [userWithPostsState, setUserWithPostsState] = useState<IUserWithPostsType[]>([])

    const userWithPostsArray = useMemo(() => {
        return ()=>{
            return allUsers.map(user => {
                return {...user, posts: allPosts.filter(post => post.userId === user.id)}
            })
        }
    }, [allPosts, allUsers])

    useEffect(() => {
        setUserWithPostsState(userWithPostsArray)
    }, [userWithPostsArray]);

    return (
        <div>
            {
                userWithPostsState.map(user => <div key={user.id}>
                    <div>{user.name}</div>
                    <ul>
                        {
                            user.posts.map(post => <li key={post.id}>{post.title}</li>)
                        }
                    </ul>
                </div>)
            }
        </div>
    );
};

export default UserPostsComponent;
