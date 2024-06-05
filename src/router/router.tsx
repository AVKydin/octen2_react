import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersComponent from "../components/UsersComponent";
import PostsComponent from "../components/PostsComponent";
import CommentsComponent from "../components/CommentsComponent";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {index:true, element: <HomePage/>},
                {path:"users", element: <UsersComponent/>},
                {path:"posts", element: <PostsComponent/>},
                {path:"comments", element: <CommentsComponent/>}
            ]
        },
    ]
);

export default router;
