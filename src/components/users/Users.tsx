import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../../services/users.api.service";
import User from "../user/User";
import {IUserProps} from "../../models/User";

const Users = () => {

    const [users, setUsers] = useState<IUserProps[]>([])

    useEffect(()=>{
        getAllUsers().then(value => setUsers(value.data))
    },[])

    return (
        <div>
            {
                users.map(user=><User key={user.id} id={user.id} firstName={user.firstName} lastName={user.lastName} email={user.email} image={user.image}/>)
            }
        </div>
    );

};

export default Users;
