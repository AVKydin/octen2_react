import React, {useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {getPostByUserId} from "./services/users.api.service";
import {IPostProps} from "./models/PostModel";
import Posts from "./components/Posts/Posts";



const App = () => {

    const [posts, setPosts]=useState<IPostProps[]>([])

    const elevator: (id: number) => void = (id:number) =>{
        getPostByUserId(id).then(value => setPosts(value.data.posts))
    }

  return (
      <div className="DF">
        <Users elevator={elevator}/>
        <Posts posts={posts}/>
      </div>
  );
};


export default App;


