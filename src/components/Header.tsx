import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Header:FC = () => {
    return (
        <div>
            <hr/>
            <Link to="users">users</Link>
            <br/>
            <Link to="posts">posts</Link>
            <br/>
            <Link to="comments">comments</Link>
            <hr/>
        </div>
    );
};

export default Header;
