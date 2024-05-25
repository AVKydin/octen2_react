import React, {FC, useEffect, useState} from 'react';
import User from "../user/User";
import {getAllUsers} from "../../services/users.api.service";
import {UserModel} from "../../models/UserModel";

export interface IUsers{
    users: UserModel[]
}

type IUsersType = {elevator?:(id:number)=>void}

const Users:FC<IUsersType> = ({elevator}) => {


    const [users, setUsers] = useState<UserModel[]>()

    useEffect(()=>{
        getAllUsers().then((value) => setUsers(value.data.users))
    },[])

    return (
        <div>
            {
                users?.map((user)=><User key={user.id} user={user} elevator={elevator}/>)
            }
        </div>
    );

};

export default Users;
