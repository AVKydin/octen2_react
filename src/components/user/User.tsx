import React, {FC} from 'react';
import {IUserProps} from "../../models/User";


export type IUserType = IUserProps & {children?:React.ReactNode}

const User:FC<IUserType> = ({id, firstName, lastName, email, image}) => {



    return (
        <div>
            <h4>{id}</h4>
            <h2>{firstName} {lastName}</h2>
            <p>{email}</p>
            <img src={image} alt={firstName}/>
        </div>
    );
};

export default User;
