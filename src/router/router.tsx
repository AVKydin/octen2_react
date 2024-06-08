import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout/>,
            errorElement: <h2>ще в роботі</h2>,
            children: [
                {index:true, element: <HomePage/>},
                {path:"users", element: <UsersPage/>, children: [
                        {path:":id", element: <PostsPage/>},
                        {path:":userId/:postId", element: <PostsPage/>},
                    ]},
                {path:"posts", element: <PostsPage/>, children: [
                        {path:":id", element: <CommentsPage/>}
                    ]},
                {path:"comments", element: <CommentsPage/>}
            ]
        },
    ]
);

export default router;
