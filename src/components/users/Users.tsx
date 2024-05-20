import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../../services/users.api.service";
import User, {IUserProps} from "../user/User";

const Users = () => {

    const [users, setUsers] = useState<IUserProps[]>([])

    useEffect(()=>{
        getAllUsers().then(({users}) => setUsers(users))
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
