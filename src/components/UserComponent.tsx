import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUser
}

const UserComponent:FC<IProps> = ({user}) => {
    let navigate = useNavigate();
    return (
        <div>
            <span>{user.id} - {user.name}</span>
            <button onClick={()=>{
                navigate(user.id.toString())
            }}>more info</button>
        </div>
    );
};

export default UserComponent;
