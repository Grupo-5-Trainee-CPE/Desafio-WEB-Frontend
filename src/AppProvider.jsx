import React from 'react';
import GlobalStyles from './styles/GlobalStyles.js';
import Home from "./Pages/Home"
import Cadastro from "./Pages/Cadastro"
import Login from "./Pages/Login"
import Routes from "./routes"


function App() {
  return (
    <React.StrictMode>
      <div>
        <Routes/>
      </div>
    </React.StrictMode>
  );
}

export default App;
