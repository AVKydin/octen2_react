import React, {useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {commentService, postService, userService} from "./services/api.service";
import {Context} from "./context/ContextProvider";
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import {ICommentModel} from "./models/ICommentModel";


const App = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([]);
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null)

    useEffect(() => {
        userService.getUsers().then(user => setUsers(user.data));
        postService.getUsers().then(post => setPosts(post.data))
        commentService.getComments().then(comment => setComments(comment.data))
    }, []);

    const setFavoriteUser = (obj: IUserModel   ) =>{
        setFavoriteUserState(obj)
    }

  return (
      <div>
          <HeaderComponent/>
          <Context.Provider value={{
              userStore: {
                  allUsers: users,
                  setFavoriteUser: (obj: IUserModel) => setFavoriteUser(obj)
              },
              postStore: {
                  allPosts: posts,
              },
              commentStore: {
                  allComments: comments,
              }
          }}>
              <Outlet/>
          </Context.Provider>

          <hr/>
          {favoriteUserState && <div>{favoriteUserState.email}</div>}
          <hr/>

      </div>
  );
};


export default App;


