import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";


const UserComponent:FC<IUserModel> = ({userName, name, id}) => {
    return (
        <div>
            <span>{id}</span>
            <span>{name}</span>
            <span>{userName}</span>
        </div>
    );
};

export default UserComponent;
