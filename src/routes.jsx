/*import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Projeto from "./Pages/Projeto/Projeto";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="projeto" element={<Projeto />} />
    </Route>
  )
);


export default function Routes() {
  return <RouterProvider router={router} />;
}
*/

import React from "react";
import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";

// Simulando a verificação de autenticação
const isUserAuthenticated = () => {
  // Lógica para verificar se o usuário está autenticado
  // Retorne true se estiver autenticado, false caso contrário
  return true; // Altere para a lógica real de verificação de autenticação
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Definindo uma rota protegida para a página Home */}
      <Route
        path="/"
        element={
          // Verificando se o usuário está autenticado
          isUserAuthenticated() ? <Home /> : <Navigate to="/login" />
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="cadastro" element={<Cadastro />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
