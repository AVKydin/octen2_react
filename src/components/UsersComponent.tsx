import React, {FC, useEffect, useState} from 'react';
import {userApiService} from "../services/api.services";
import {IUserModel} from "../models/IUserModel";
import UserComponent from "./UserComponent";

// interface IUsersProps{
//     users: IUserModel
// }

const UsersComponent:FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(()=>{
        userApiService.getAllUsers().then(({data})=>setUsers(data))
    }, [])

    return (
        <div>
            {
                users?.map(user=>
                     <UserComponent key={user.id} user={user}/>
                )
            }
        </div>
    );
};

export default UsersComponent;
