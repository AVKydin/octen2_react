import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {Link} from "react-router-dom";

interface IProps{
    user: IUserModel
}

const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <Link to={user.id.toString()}>
                <span>{user.id} - </span>
                <span>{user.name} - </span>
                <span>{user.username}</span>
            </Link>
        </div>
    );
};

export default UserComponent;
