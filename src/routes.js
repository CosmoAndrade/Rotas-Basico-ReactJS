import React from "react";
import { Route, BrowserRouter ,  Routes} from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

const Rotas = () => {
   return(
       <BrowserRouter>
       <Routes>
            <Route   path="/" exact  element = { <Home/> } />
           <Route   path="/sobre"  element = { <Sobre/> } />
           <Route   path="/usuario" element = { <Usuario/> } />
       </Routes>
           
       </BrowserRouter>
   )
}

export default Rotas;