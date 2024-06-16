import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {useStore} from "../zustandStore/zustandStore";

interface IProps {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user}) => {

    const {userStore: {setFavoriteUser}} = useStore();

    return (
        <div>
            {
                <span>{user.id} - {user.name}</span>
            }
            <button onClick={()=>{
                setFavoriteUser(user)
            }}>set as favorite</button>
        </div>
    );
};

export default UserComponent;
