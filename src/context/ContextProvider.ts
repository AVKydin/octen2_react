import {createContext, useContext} from "react";
import {IPostModel} from "../models/IPostModel";
import {IUserModel} from "../models/IUserModel";

type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        setFavoriteUser: (obj: IUserModel) => void
    },
    postStore: {
        allPosts: IPostModel[]
    }
}

export const defaultValue: StoreType = {
    userStore: {
        allUsers: [],
        setFavoriteUser: () => {}
    },
    postStore: {
        allPosts: []
    }
}

export const Context = createContext<StoreType>(defaultValue);

export const useContextProvider = (): StoreType => {
    return useContext(Context)
}
