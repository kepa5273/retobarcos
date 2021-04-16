import './App.css';
import './login.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TableroBarcos from "./TableroBarcos";
import ChatInicio from './componentes/ChatInicio';
import Header from './Header';
import Instrucciones from "./Instrucciones"
import Inicio from './Inicio'
import 'animate.css/animate.css';
import { RemoteSocket } from 'socket.io';
import imgOla from "./olas.png";



function App() {

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Inicio />
      </Route>

      <Route exact path="/juego">
        <div id="allGame">
          <Header />
          {<div id="instrucc"><Instrucciones /> </div>}
          <div className="todoJuego">
            {<div id="tableroBarcos" ><TableroBarcos /></div>}
            {<div id="chatInicio "><ChatInicio /></div>}


          </div>
        </div>
      </Route>

    </BrowserRouter>
  )
}
export default App;

