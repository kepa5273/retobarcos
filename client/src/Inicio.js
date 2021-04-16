import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css/animate.css';
import barcoPng from "./barquitopapel.png";
import swal from 'sweetalert'; function Inicio() {
    function pasarPagina() {
        // window.location.href = 'http://localhost:3000/juego'
        swal({
            title: "BIENVENIDO/A!",
            text: "¡Comienza la batalla!",
            icon: `${barcoPng}`,
        });
    } return (
        <div className="login">
            <h1 className="loginH1 animate__animated animate__zoomIn  animate__delay-1s">Battleship</h1>
            {/* <h3 className="loginH2 animate__animated animate__zoomIn  animate__delay-2s">¡Embárcate en esta aventura!</h3> */}
            <Link to='/juego'><button className='loginBoton animate__animated animate__zoomIn  animate__delay-2s' onClick={pasarPagina}>iniciar juego</button></Link>
        </div>)
}
export default Inicio;


