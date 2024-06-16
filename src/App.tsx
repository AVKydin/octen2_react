import React, {useEffect} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {useStore} from "./zustandStore/zustandStore";
import {commentService, postService, userService} from "./services/api.service";



const App = () => {

    const {userStore, userStore: {favoriteUser}, postStore, commentStore} = useStore()

   useEffect(() => {
       userService.getUsers().then(value => userStore.loadUsers(value.data));
       postService.getPosts().then(value => postStore.loadPosts(value.data));
       commentService.getComments().then(value => commentStore.loadComments(value.data))
    }, []);


  return (
      <div>
          <HeaderComponent/>
              <Outlet/>
          <hr/>
          {favoriteUser && <div>{favoriteUser.email}</div>}
          <hr/>

      </div>
  );
};


export default App;


