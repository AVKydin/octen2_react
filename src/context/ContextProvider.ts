import {createContext, useContext} from "react";
import {IPostModel} from "../models/IPostModel";
import {IUserModel} from "../models/IUserModel";
import {ICommentModel} from "../models/ICommentModel";
import {create} from "zustand";

type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        loadUsers: (users: IUserModel[]) => void,
        favoriteUser: IUserModel | null,
        setFavoriteUser: (obj: IUserModel) => void
    },
    postStore: {
        allPosts: IPostModel[],
        loadPosts: (posts: IPostModel[]) => void
    },
    commentStore: {
        allComments: ICommentModel[],
        loadComments: (comments: ICommentModel[]) => void
    }
}


export const useStore = create<StoreType>()((set)=> {
    return {
        userStore:{
            allUsers: [],
            loadUsers: (users:IUserModel[]) => {
                return set((state: StoreType)=>{
                    return {
                        ...state,
                        userStore: {
                            ...state.userStore,
                            allUsers: users
                        }
                    }
                })
            },
            favoriteUser: null,
            setFavoriteUser: (user: IUserModel) =>{
                return set((state: StoreType)=>{
                    return {
                        ...state,
                        userStore: {
                            ...state.userStore,
                            favoriteUser: user
                        }
                    }
                })
            }
        },
        postStore: {
            allPosts: [],
            loadPosts: (posts: IPostModel[]) => {
                return set((state: StoreType)=>{
                    return {
                        ...state,
                        postStore: {
                            ...state.postStore,
                            allPosts: posts
                        }
                    }
                })
            }
        },
        commentStore: {
            allComments: [],
            loadComments: (comments: ICommentModel[]) => {
                return set((state: StoreType)=>{
                    return {
                        ...state,
                        commentStore: {
                            ...state.commentStore,
                            allComments: comments
                        }
                    }
                })
            }
        }
    }
})
