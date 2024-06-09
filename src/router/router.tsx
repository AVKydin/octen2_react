import {createBrowserRouter} from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import CarsPage from "../pages/CarsPage";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout/>,
            errorElement: <h2>ще в роботі</h2>,
            children: [
                {index:true, element: <AuthPage/>},
                {path:"cars", element: <CarsPage/>}

            ]
        },
    ]
);

export default router;
