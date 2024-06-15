import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";

interface IProps {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            {
                <span>{user.id} - {user.name}</span>
            }
        </div>
    );
};

export default UserComponent;
