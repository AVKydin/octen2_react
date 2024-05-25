import React, {FC} from 'react';
import {UserModel} from "../../models/UserModel";

interface IProps{
    user: UserModel
}

type IPropsType = IProps & {children?:React.ReactNode} & { elevator?:(id:number) =>void }

const User:FC<IPropsType> = ({user, elevator}) => {



    return (
        <div>
            <h4>{user.id}</h4>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>{user.email}</p>
            <img src={user.image} alt={user.firstName}/>
            <button onClick={()=>{
                if(elevator){
                    elevator(user.id)
                }
            }}>posts</button>
        </div>
    );
};

export default User;
