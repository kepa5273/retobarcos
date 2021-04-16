import React, { useState, useEffect, useRef } from "react";
import Chat from "./Chat";
import "../App.css";
import posicionesBarcos from "../posicionesBarcos";
import Juego from "../juego";
import swal from 'sweetalert';
import errorImg from "./error.png";


import { Link } from "react-router-dom";

function ChatInicio(props) {
  const [nombre, setNombre] = useState("");
  const [registrado, setRegistrado] = useState(false);
  const [barcos, setBarcos] = useState();
  const [continuar, setContinuar] = useState(false);

  const registrar = (e) => {
    e.preventDefault();
    if (nombre !== "" && continuar === true) {
      setRegistrado(true);
    }
  };

  function jugar() {
    // debugger;     

    if (posicionesBarcos() !== false) { //si no es false el return de posiciones barcos, se cambia a la siguiente pantalla
      setBarcos(posicionesBarcos());
      setContinuar(true);
      none();
    }
    else {
      swal({
        title: "ERROR",
        text: "Completa todos los pasos",
        icon: `${errorImg}`,
        button: `Entendido`,
    });

    }
  }

  function none() {
    document.getElementById("tableroBarcos").classList.add("hidden");
    document.getElementById("juego").classList.remove("hidden");
    
    document.getElementById("instrucc").classList.add("none");

  };


  return (
    <div class="todoChatInicio">
      {/* className="hidden" */}
      <div id="juego" className="hidden" ><Juego barcos={barcos} nombre={nombre} /></div>
      <div id="app">
        <div className="app">
          {!registrado && (
            <form className="form" onSubmit={registrar}>
              {/* <label htmlFor="">Introduzca su nombre</label> */}
              <input placeholder="Introduce tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              <div><button className="but" onClick={jugar}>¡A jugar!</button></div>
            </form>
          )}
          {registrado && <Chat nombre={nombre} />}
        </div>
      </div>


    </div>
  );
}

export default ChatInicio;
