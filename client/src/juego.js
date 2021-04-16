import React, { useState, useEffect, useRef } from "react";
import socket from "./Socket";
import "./App.css";
import swal from 'sweetalert';
import perdidoImg from "./perdido.png";
import ganadoImg from "./ganado.png";
import { Link } from "react-router-dom";

const Juego = ({ barcos, nombre }) => {
    let [idDisparo, setIdDisparo] = useState("");
    let [idDisparos, setidDisparos] = useState([]); //esto es un array de disparos   
    let [idBarcos, setidBarcos] = useState([]);
    let [fraseTurno, setfraseTurno] = useState("");
    let [fraseFinPartida, setfraseFinPartida] = useState("frase fin partida");
    let [muertos, setmuertos] = useState("muertos suyos...");
    let [muertosMios, setmuertosMios] = useState("muertos mios...");
    let [contadorGanarVacio, setcontadorGanarVacio] = useState(0);
    let [contadorGanarBarcos, setcontadorGanarBarcos] = useState(0);
    // let contadorGanarVacio;
    // let contadorGanarBarcos;
    let tuTurno = "Tu turno";
    let suTurno = "Turno del oponente";
    let ganado = "Has ganado";
    let perdido = "Has perdido";
    let tocado = "Barco tocado";
    let hundido = "Barco hundido";
    let agua = "Agua";
    let misbarquitos;
    let barquitos;




    function limpiaCasillas() {
        for (let i = 101; i <= 300; i++) {
            document.getElementById(`${i}`).style.background = "";
        }
    }

    useEffect(() => {
        if (barcos) {
            limpiaCasillas();
            pintarBarcos();
        }
    }, [barcos]);


    function pintarBarcos() {

        let barCuatro = barcos.barCuatro;
        let barTres1 = barcos.barTres1;
        let barTres2 = barcos.barTres2;
        let barDos1 = barcos.barDos1;
        let barDos2 = barcos.barDos2;
        let barDos3 = barcos.barDos3;
        let barUno1 = barcos.barUno1;
        let barUno2 = barcos.barUno2;
        let barUno3 = barcos.barUno3;
        let barUno4 = barcos.barUno4;

        document.getElementById(`${parseInt(barUno1) + 100}`).classList.add("ocupada");
        document.getElementById(`${parseInt(barUno1) + 100}`).classList.add("barUno1");
        document.getElementById(`${parseInt(barUno1) + 100}`).style.background = "antiquewhite";

        document.getElementById(`${parseInt(barUno2) + 100}`).classList.add("ocupada");
        document.getElementById(`${parseInt(barUno2) + 100}`).classList.add("barUno2");
        document.getElementById(`${parseInt(barUno2) + 100}`).style.background = "antiquewhite";

        document.getElementById(`${parseInt(barUno3) + 100}`).classList.add("ocupada");
        document.getElementById(`${parseInt(barUno3) + 100}`).classList.add("barUno3");
        document.getElementById(`${parseInt(barUno3) + 100}`).style.background = "antiquewhite";

        document.getElementById(`${parseInt(barUno4) + 100}`).classList.add("ocupada");
        document.getElementById(`${parseInt(barUno4) + 100}`).classList.add("barUno4");
        document.getElementById(`${parseInt(barUno4) + 100}`).style.background = "antiquewhite";


        for (let i = 0; i < 4; i++) {
            document.getElementById(`${parseInt(barCuatro[i]) + 100}`).classList.add("ocupada");
            document.getElementById(`${parseInt(barCuatro[i]) + 100}`).classList.add("barCuatro");
            document.getElementById(`${parseInt(barCuatro[i]) + 100}`).style.background = "antiquewhite";
        }
        for (let i = 0; i < 3; i++) {
            document.getElementById(`${parseInt(barTres1[i]) + 100}`).classList.add("ocupada");
            document.getElementById(`${parseInt(barTres1[i]) + 100}`).classList.add("barTres1");
            document.getElementById(`${parseInt(barTres1[i]) + 100}`).style.background = "antiquewhite";

        }
        for (let i = 0; i < 3; i++) {
            document.getElementById(`${parseInt(barTres2[i]) + 100}`).classList.add("ocupada");
            document.getElementById(`${parseInt(barTres2[i]) + 100}`).classList.add("barTres2");
            document.getElementById(`${parseInt(barTres2[i]) + 100}`).style.background = "antiquewhite";

        }
        for (let i = 0; i < 2; i++) {
            document.getElementById(`${parseInt(barDos1[i]) + 100}`).classList.add("ocupada");
            document.getElementById(`${parseInt(barDos1[i]) + 100}`).classList.add("barDos1");
            document.getElementById(`${parseInt(barDos1[i]) + 100}`).style.background = "antiquewhite";

        }
        for (let i = 0; i < 2; i++) {
            document.getElementById(`${parseInt(barDos2[i]) + 100}`).classList.add("ocupada");
            document.getElementById(`${parseInt(barDos2[i]) + 100}`).classList.add("barDos2");
            document.getElementById(`${parseInt(barDos2[i]) + 100}`).style.background = "antiquewhite";

        }
        for (let i = 0; i < 2; i++) {
            document.getElementById(`${parseInt(barDos3[i]) + 100}`).classList.add("ocupada");
            document.getElementById(`${parseInt(barDos3[i]) + 100}`).classList.add("barDos3");
            document.getElementById(`${parseInt(barDos3[i]) + 100}`).style.background = "antiquewhite";
        }
    }

    ////////////////////////barcos/////////////////////////
    useEffect(() => {
        socket.emit("barco", nombre, barcos);
    }, [barcos])

    useEffect(() => {
        socket.on("barcos", (ship) => {
            //he quitado el seteo de aquí, ya que todo se guarda en barcos. quizá habría que setearlo para traernos todo
            setidBarcos([...idBarcos, ship]);
        });
        return () => {
            socket.off()
        }
    })
    //////////////////////////////////////////////

    //////////////////disparos////////////////
    useEffect(() => {
        socket.emit("disparo", nombre, idDisparo);
    }, [idDisparo])


    useEffect(() => {
        socket.on("disparos", (shot) => {
            setidDisparos([...idDisparos, shot])
        });
        return () => {
            socket.off()
        }
    })
    let enlace = <a href="http://localhost:3000/juego"/>;

    function ganarPop() {
        // window.location.href = 'http://localhost:3000/juego'
        swal({
            title: "¡HAS GANADO!",
            icon: `${ganadoImg}`,
            button: `Jugar otra vez`,
        });

    }

    function perderPop() {
        // window.location.href = 'http://localhost:3000/juego'
        swal({
            title: "HAS PERDIDO",
            icon: `${perdidoImg}`,
            button: `Jugar otra vez`,
        });
    }

    useEffect(() => {
        if (contadorGanarBarcos === 20) {  //gana el contrario
            setfraseTurno("");
            //setfraseFinPartida(perdido);
            perderPop();

        }
        if (contadorGanarVacio === 20) { //ganas tú
            setfraseTurno("");
            // setfraseFinPartida(ganado);
            ganarPop();
            guardarPartida();
        }

    }, [contadorGanarBarcos, contadorGanarVacio])

    // ------------------
    useEffect(() => {
        setmuertosMios("");
        setmuertos("");
        if (idDisparos.length > 0) {
            let idBorrar = idDisparos[idDisparos.length - 1].shot;
            let nombreBorrar = idDisparos[idDisparos.length - 1].nombre;
            let sinBarcos = document.getElementById(`${parseInt(idBorrar)}`);
            let conBarcos = document.getElementById(`${parseInt(idBorrar) - 100}`);

            if (idBorrar !== "") {
                //el tablero de los barcos     
                if (nombreBorrar !== nombre) {
                    let dado = false;
                    misbarquitos = Object.values(barcos);
                    console.log(misbarquitos); //todos los barcos en un objeto
                    misbarquitos.forEach(arrayUnBarco => {
                        console.log(arrayUnBarco); //cara
                        arrayUnBarco.forEach(posicionBarco => {
                            console.log(posicionBarco);
                            if (posicionBarco === (parseInt(idBorrar) - 200)) {
                                dado = true;
                                //aquí habría que ir borrando las posiciones del array
                            }
                        });
                    });
                    if (dado == true) {
                        conBarcos.style.background = "#FF5A12";
                        // conBarcos.classList.add("tocado");

                        setmuertosMios(`${tocado}`);
                        setcontadorGanarBarcos(contadorGanarBarcos + 1);
                    }
                    else {
                        conBarcos.classList.add("agua");
                        document.getElementById("ocultador").classList.add("hidden"); //desaparece
                        setfraseTurno(tuTurno);
                        setmuertosMios(`¡${agua}!`);

                    }
                }


                //el tablero vacío
                else {
                    let contBarcos = 0;
                    let dado = false;
                    for (let i = idBarcos.length - 1; i > 0; i--) {
                        if (nombre != idBarcos[i].nombre && contBarcos == 0) {
                            contBarcos++;
                            barquitos = Object.values(idBarcos[i].barcos)
                            barquitos.forEach(arrayUnBarco => {
                                arrayUnBarco.forEach(posicionBarco => {
                                    if (posicionBarco === (parseInt(idBorrar) - 200)) {
                                        dado = true;
                                    }
                                });
                            });
                        }
                    }
                    if (dado == true) {
                        sinBarcos.style.background = "#FF5A12";
                        // sinBarcos.classList.add("tocado");
                        setmuertos(`¡${tocado}!`);
                        setcontadorGanarVacio(contadorGanarVacio + 1);
                        //debugger;


                    } else {
                        sinBarcos.classList.add("agua");
                        document.getElementById("ocultador").classList.remove("hidden"); //aparece
                        setfraseTurno(suTurno);
                        setmuertos(`${agua}`);
                    }
                }

            }
        }
    }, [idDisparos]);
    //-----------------

    //////////////////////////////////////////////



    function disparo(e) {
        setIdDisparo(e.target.id)
        e.target.style.pointerEvents = "none"; //anular disparo
    };

    function guardarPartida() {//con esta funcion envio los datos al back con el boton.
        let fetchPartida = { //esto es un protocolo.
            method: "POST",
            body: JSON.stringify({ idDisparos: idDisparos }),
            headers: {
                "Content-Type": "application/json; charset = UTF-8"
            }
        }
        fetch('http://localhost:9000/juegoback/post/', fetchPartida)
            .then(response => response.json()) //va a recibir un Json(es lo que le quiere decir)
            .then(data => {
                // console.log(idDisparos[idDisparos.length - 1].nombre);//la ultima posicion deberia ser la que ha ganado               
                // swal("ENHORABUENA", " tu victoria ha sido guardada correctamente", "info");
            })
    }


    return (
        <>
            <div className="nombre"><h3>¡Hola {nombre}! </h3><span className="turno">{fraseTurno}</span></div>
            <div className='container'>
                <div>
                    <div className="grid">
                        <div id="ocultador" className="hidden"></div>
                        <div onClick={e => disparo(e)} id="201"></div>
                        <div onClick={e => disparo(e)} id="202"></div>
                        <div onClick={e => disparo(e)} id="203"></div>
                        <div onClick={e => disparo(e)} id="204"></div>
                        <div onClick={e => disparo(e)} id="205"></div>
                        <div onClick={e => disparo(e)} id="206"></div>
                        <div onClick={e => disparo(e)} id="207"></div>
                        <div onClick={e => disparo(e)} id="208"></div>
                        <div onClick={e => disparo(e)} id="209"></div>
                        <div onClick={e => disparo(e)} id="210"></div>
                        <div onClick={e => disparo(e)} id="211"></div>
                        <div onClick={e => disparo(e)} id="212"></div>
                        <div onClick={e => disparo(e)} id="213"></div>
                        <div onClick={e => disparo(e)} id="214"></div>
                        <div onClick={e => disparo(e)} id="215"></div>
                        <div onClick={e => disparo(e)} id="216"></div>
                        <div onClick={e => disparo(e)} id="217"></div>
                        <div onClick={e => disparo(e)} id="218"></div>
                        <div onClick={e => disparo(e)} id="219"></div>
                        <div onClick={e => disparo(e)} id="220"></div>
                        <div onClick={e => disparo(e)} id="221"></div>
                        <div onClick={e => disparo(e)} id="222"></div>
                        <div onClick={e => disparo(e)} id="223"></div>
                        <div onClick={e => disparo(e)} id="224"></div>
                        <div onClick={e => disparo(e)} id="225"></div>
                        <div onClick={e => disparo(e)} id="226"></div>
                        <div onClick={e => disparo(e)} id="227"></div>
                        <div onClick={e => disparo(e)} id="228"></div>
                        <div onClick={e => disparo(e)} id="229"></div>
                        <div onClick={e => disparo(e)} id="230"></div>
                        <div onClick={e => disparo(e)} id="231"></div>
                        <div onClick={e => disparo(e)} id="232"></div>
                        <div onClick={e => disparo(e)} id="233"></div>
                        <div onClick={e => disparo(e)} id="234"></div>
                        <div onClick={e => disparo(e)} id="235"></div>
                        <div onClick={e => disparo(e)} id="236"></div>
                        <div onClick={e => disparo(e)} id="237"></div>
                        <div onClick={e => disparo(e)} id="238"></div>
                        <div onClick={e => disparo(e)} id="239"></div>
                        <div onClick={e => disparo(e)} id="240"></div>
                        <div onClick={e => disparo(e)} id="241"></div>
                        <div onClick={e => disparo(e)} id="242"></div>
                        <div onClick={e => disparo(e)} id="243"></div>
                        <div onClick={e => disparo(e)} id="244"></div>
                        <div onClick={e => disparo(e)} id="245"></div>
                        <div onClick={e => disparo(e)} id="246"></div>
                        <div onClick={e => disparo(e)} id="247"></div>
                        <div onClick={e => disparo(e)} id="248"></div>
                        <div onClick={e => disparo(e)} id="249"></div>
                        <div onClick={e => disparo(e)} id="250"></div>
                        <div onClick={e => disparo(e)} id="251"></div>
                        <div onClick={e => disparo(e)} id="252"></div>
                        <div onClick={e => disparo(e)} id="253"></div>
                        <div onClick={e => disparo(e)} id="254"></div>
                        <div onClick={e => disparo(e)} id="255"></div>
                        <div onClick={e => disparo(e)} id="256"></div>
                        <div onClick={e => disparo(e)} id="257"></div>
                        <div onClick={e => disparo(e)} id="258"></div>
                        <div onClick={e => disparo(e)} id="259"></div>
                        <div onClick={e => disparo(e)} id="260"></div>
                        <div onClick={e => disparo(e)} id="261"></div>
                        <div onClick={e => disparo(e)} id="262"></div>
                        <div onClick={e => disparo(e)} id="263"></div>
                        <div onClick={e => disparo(e)} id="264"></div>
                        <div onClick={e => disparo(e)} id="265"></div>
                        <div onClick={e => disparo(e)} id="266"></div>
                        <div onClick={e => disparo(e)} id="267"></div>
                        <div onClick={e => disparo(e)} id="268"></div>
                        <div onClick={e => disparo(e)} id="269"></div>
                        <div onClick={e => disparo(e)} id="270"></div>
                        <div onClick={e => disparo(e)} id="271"></div>
                        <div onClick={e => disparo(e)} id="272"></div>
                        <div onClick={e => disparo(e)} id="273"></div>
                        <div onClick={e => disparo(e)} id="274"></div>
                        <div onClick={e => disparo(e)} id="275"></div>
                        <div onClick={e => disparo(e)} id="276"></div>
                        <div onClick={e => disparo(e)} id="277"></div>
                        <div onClick={e => disparo(e)} id="278"></div>
                        <div onClick={e => disparo(e)} id="279"></div>
                        <div onClick={e => disparo(e)} id="280"></div>
                        <div onClick={e => disparo(e)} id="281"></div>
                        <div onClick={e => disparo(e)} id="282"></div>
                        <div onClick={e => disparo(e)} id="283"></div>
                        <div onClick={e => disparo(e)} id="284"></div>
                        <div onClick={e => disparo(e)} id="285"></div>
                        <div onClick={e => disparo(e)} id="286"></div>
                        <div onClick={e => disparo(e)} id="287"></div>
                        <div onClick={e => disparo(e)} id="288"></div>
                        <div onClick={e => disparo(e)} id="289"></div>
                        <div onClick={e => disparo(e)} id="290"></div>
                        <div onClick={e => disparo(e)} id="291"></div>
                        <div onClick={e => disparo(e)} id="292"></div>
                        <div onClick={e => disparo(e)} id="293"></div>
                        <div onClick={e => disparo(e)} id="294"></div>
                        <div onClick={e => disparo(e)} id="295"></div>
                        <div onClick={e => disparo(e)} id="296"></div>
                        <div onClick={e => disparo(e)} id="297"></div>
                        <div onClick={e => disparo(e)} id="298"></div>
                        <div onClick={e => disparo(e)} id="299"></div>
                        <div onClick={e => disparo(e)} id="300"></div>
                    </div>
                    <p class="muertos">{muertos}</p>
                </div>
                <div>
                    <div className="grid">
                        <div id="101"></div>
                        <div id="102"></div>
                        <div id="103"></div>
                        <div id="104"></div>
                        <div id="105"></div>
                        <div id="106"></div>
                        <div id="107"></div>
                        <div id="108"></div>
                        <div id="109"></div>
                        <div id="110"></div>
                        <div id="111"></div>
                        <div id="112"></div>
                        <div id="113"></div>
                        <div id="114"></div>
                        <div id="115"></div>
                        <div id="116"></div>
                        <div id="117"></div>
                        <div id="118"></div>
                        <div id="119"></div>
                        <div id="120"></div>
                        <div id="121"></div>
                        <div id="122"></div>
                        <div id="123"></div>
                        <div id="124"></div>
                        <div id="125"></div>
                        <div id="126"></div>
                        <div id="127"></div>
                        <div id="128"></div>
                        <div id="129"></div>
                        <div id="130"></div>
                        <div id="131"></div>
                        <div id="132"></div>
                        <div id="133"></div>
                        <div id="134"></div>
                        <div id="135"></div>
                        <div id="136"></div>
                        <div id="137"></div>
                        <div id="138"></div>
                        <div id="139"></div>
                        <div id="140"></div>
                        <div id="141"></div>
                        <div id="142"></div>
                        <div id="143"></div>
                        <div id="144"></div>
                        <div id="145"></div>
                        <div id="146"></div>
                        <div id="147"></div>
                        <div id="148"></div>
                        <div id="149"></div>
                        <div id="150"></div>
                        <div id="151"></div>
                        <div id="152"></div>
                        <div id="153"></div>
                        <div id="154"></div>
                        <div id="155"></div>
                        <div id="156"></div>
                        <div id="157"></div>
                        <div id="158"></div>
                        <div id="159"></div>
                        <div id="160"></div>
                        <div id="161"></div>
                        <div id="162"></div>
                        <div id="163"></div>
                        <div id="164"></div>
                        <div id="165"></div>
                        <div id="166"></div>
                        <div id="167"></div>
                        <div id="168"></div>
                        <div id="169"></div>
                        <div id="170"></div>
                        <div id="171"></div>
                        <div id="172"></div>
                        <div id="173"></div>
                        <div id="174"></div>
                        <div id="175"></div>
                        <div id="176"></div>
                        <div id="177"></div>
                        <div id="178"></div>
                        <div id="179"></div>
                        <div id="180"></div>
                        <div id="181"></div>
                        <div id="182"></div>
                        <div id="183"></div>
                        <div id="184"></div>
                        <div id="185"></div>
                        <div id="186"></div>
                        <div id="187"></div>
                        <div id="188"></div>
                        <div id="189"></div>
                        <div id="190"></div>
                        <div id="191"></div>
                        <div id="192"></div>
                        <div id="193"></div>
                        <div id="194"></div>
                        <div id="195"></div>
                        <div id="196"></div>
                        <div id="197"></div>
                        <div id="198"></div>
                        <div id="199"></div>
                        <div id="200"></div>
                    </div>
                    <p class="muertos">{muertosMios}</p>
                </div>
            </div>
        </>
    );
};

export default Juego;