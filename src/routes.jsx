import {
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom"

import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Cadastro from "./Pages/Cadastro"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element = {<Home />} />
            <Route path="login" element = {<Login />} />
            <Route path="login/cadastro" element = {<Cadastro />} />

        </Route>
    ) 
)

export default function Routes() {
    return <RouterProvider router={router} />
}