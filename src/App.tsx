import React, {useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {postService, userService} from "./services/api.service";
import {Context, defaultValue} from "./context/ContextProvider";
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";


const App = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        userService.getUsers().then(user => setUsers(user.data));
        postService.getUsers().then(post => setPosts(post.data))
    }, []);

  return (
      <div>
        <HeaderComponent/>
          <Context.Provider value={{
              userStore: {
                  allUsers: users,
              },
              postStore: {
                  allPosts: posts,
              }
          }}>
            <Outlet/>
          </Context.Provider>
      </div>
  );
};


export default App;


