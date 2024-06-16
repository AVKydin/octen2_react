import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
                <li><Link to={'comments'}>Comments</Link></li>
                <li><Link to={'userPosts'}>users & posts</Link></li>
                <li><Link to={'postComments'}>post & comments</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;
