import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersComponent from "../components/UsersComponent";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {index:true, element: <HomePage/>},
                {path:"users", element: <UsersComponent/>},
                {path:"posts", element: <UsersComponent/>},
                {path:"comments", element: <UsersComponent/>}
            ]
        },
    ]
);

export default router;
