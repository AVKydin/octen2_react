import {createContext, useContext} from "react";
import {IPostModel} from "../models/IPostModel";
import {IUserModel} from "../models/IUserModel";

type StoreType = {
    userStore: {
        allUsers: IUserModel[]
    },
    postStore: {
        allPosts: IPostModel[]
    }
}

export const defaultValue: StoreType = {
    userStore: {
        allUsers: []
    },
    postStore: {
        allPosts: []
    }
}

export const Context = createContext<StoreType>(defaultValue);

export const useContextProvider = (): StoreType => {
    return useContext(Context)
}
