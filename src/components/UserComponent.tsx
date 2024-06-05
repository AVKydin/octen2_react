import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";

interface IProps{
    user: IUserModel
}

const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <span>{user.id} - </span>
            <span>{user.name} - </span>
            <span>{user.username}</span>
        </div>
    );
};

export default UserComponent;
