import './App.css';
import React from "react";
import dragdrop from "./dragdrop";
import 'animate.css/animate.css';


function TableroBarcos() {
    dragdrop();
    
        

    function comprobarGiro(e) {
       
        // document.getElementById("tableromover").classList.remove("animate__animated");          
        // document.getElementById("tableromover").classList.remove("animate__animated");
        
        let barcoGirar = e.target;
        console.log(barcoGirar)
        
        // barcoGirar.classList.remove("animate__animated animate__pulse");
        let barcoId = parseInt(barcoGirar.className.substring(4, 5));
        let vertical = barcoGirar.classList.contains("rotate");
        let posicionDiv = parseInt(barcoGirar.parentElement.id); //OBTENGO EN QUE CASILLA SE ENCUENTRA
        let vacioLlenoH; //para precedir movimientos. si estoy en casilla 10 en forma vertical y quiero girar de forma horizontal, tendré que precedir que voy a caer en la casilla 10+1+1+1...     
        let casillaH;
        let casillaH10;
        let casillaH20;
        let vacioLlenoV;
        let vacioBorrar;
        let casillaV;
        let casillaV1;
        let casillaV2;
        let numStop;
        let iHorizontal;
        let numResta;

        // function noGirar() {
            
        //     document.getElementById("tableromover").classList.add("animate__animated");
        //     document.getElementById("tableromover").classList.add("animate__pulse");  
           
        // }
        //HORIZONTALES       
        if (!vertical) {
            vacioLlenoH = posicionDiv + 20;
            casillaH = document.getElementById(`${vacioLlenoH}`);
            casillaH10 = document.getElementById(`${vacioLlenoH + 10}`);
            casillaH20 = document.getElementById(`${vacioLlenoH + 20}`);
           
            if (barcoId === 2 && !vertical) {
                numStop = 0;
                if (posicionDiv >= 91 && posicionDiv <= 100) {
                    // barcoGirar.classList.add("animate__animated animate__pulse");
                    // noGirar(); 
                } 
                else if (casillaH && casillaH.classList.contains("noSpacio") && casillaH.classList.contains("keyParaGirarArriba")) {
                    // barcoGirar.classList.add("animate__animated animate__pulse");
                    // noGirar();              
                }
                else {
                    girar()
                    borrarAñadirGiroH()
                }
            }
            if (barcoId === 3 && !vertical) {
                numStop = 1;
                if ((posicionDiv >= 81 && posicionDiv <= 90) || (posicionDiv >= 91 && posicionDiv <= 100)) {
                    // barcoGirar.classList.add("animate__animated animate__pulse");
                    // noGirar();
                }
                else if (casillaH && casillaH10 && (casillaH.classList.contains("noSpacio") && casillaH.classList.contains("keyParaGirarArriba") || casillaH10.classList.contains("noSpacio") && casillaH10.classList.contains("keyParaGirarArriba"))) {
                    // barcoGirar.classList.add("animate__animated animate__pulse");
                    // noGirar();
                }
                else {
                    girar()
                    borrarAñadirGiroH()
                }
            }
            if (barcoId === 4 && !vertical) {
                numStop = 2;
                if ((posicionDiv >= 71 && posicionDiv <= 80 || (posicionDiv >= 81 && posicionDiv <= 90) || (posicionDiv >= 91 && posicionDiv <= 100))) {
                    // barcoGirar.classList.add("animate__animated animate__pulse");
                    // noGirar();
                }
                else if (casillaH && casillaH10 && casillaH20 && (casillaH.classList.contains("noSpacio") && casillaH.classList.contains("keyParaGirarArriba") || casillaH10.classList.contains("noSpacio") && casillaH10.classList.contains("keyParaGirarArriba") || casillaH20.classList.contains("noSpacio") && casillaH20.classList.contains("keyParaGirarArriba"))) {
                    // barcoGirar.classList.add("animate__animated animate__pulse");
                    // noGirar();
                }
                else {
                    girar()
                    borrarAñadirGiroH()
                }
            }
        }

        //VERTICALES
        if (vertical) {
            vacioLlenoV = posicionDiv + 2;
            vacioBorrar = posicionDiv + 20;
            casillaV = document.getElementById(`${vacioLlenoV}`);
            casillaV1 = document.getElementById(`${vacioLlenoV + 1}`);
            casillaV2 = document.getElementById(`${vacioLlenoV + 2}`);
            if (barcoId === 2) {
                numStop = 0;
                numResta = 1;
                if (posicionDiv % 10 === 0) {
                    // barcoGirar.classList.add("animate__animated animate__pulse");
                    // noGirar();
                }
                else if (casillaV && casillaV.classList.contains("noSpacio") && casillaV.classList.contains("keyParaGirarIzq")) {
                    // barcoGirar.classList.add("animate__animated animate__pulse");
                    // noGirar();
                }
                else {
                    girar()
                    borrarAñadirGiroV()
                }
            }
            if (barcoId === 3) {
                numStop = 1;
                numResta = 2;
                if (((posicionDiv + 1) % 10 === 0) || (posicionDiv % 10 === 0)) {
                    // barcoGirar.classList.add("animate__animated animate__pulse");
                    // noGirar();
                }
                else if (casillaV && (casillaV.classList.contains("noSpacio") && casillaV.classList.contains("keyParaGirarIzq") || casillaV1.classList.contains("noSpacio") && casillaV1.classList.contains("keyParaGirarIzq"))) {
                    // barcoGirar.classList.add("animate__animated animate__pulse");
                    // noGirar();
                }
                else {
                    girar()
                    borrarAñadirGiroV()
                }
            }
            if (barcoId === 4) {
                numStop = 2;
                numResta = 3;
                if (((posicionDiv + 2) % 10 === 0) || ((posicionDiv + 1) % 10 === 0) || (posicionDiv % 10 === 0)) {
                    // barcoGirar.classList.add("animate__animated animate__pulse");
                    // noGirar();

                }
                else if (casillaV && (casillaV.classList.contains("noSpacio") && casillaV.classList.contains("keyParaGirarIzq") || casillaV1.classList.contains("noSpacio") && casillaV1.classList.contains("keyParaGirarIzq") || casillaV2.classList.contains("noSpacio") && casillaV2.classList.contains("keyParaGirarIzq"))) {
                    // barcoGirar.classList.add("animate__animated animate__pulse");
                    // noGirar();

                }
                else {
                    girar()
                    borrarAñadirGiroV()
                }
            }
        }


        //FUNCIÓN PARA HACER LOS GIROS
        function girar() {
            if (barcoGirar.classList.contains("rotate")) {
                barcoGirar.classList.remove("rotate");
            }
            else {
                barcoGirar.classList.add("rotate");
            }
        }

        //FUNCIÓN PARA RESTRINGIR AREA DE POSAR ALREDEDOR DE CADA BARCO //falta restringir que se pinten de gris las casillas del otro lado
        function borrarAñadirGiroH() {
            let y = 0;
            //AÑADIR GRIS AL GIRAR
            for (let i = 0; i <= numStop; i++) {
                if (document.getElementById(`${vacioLlenoH + y}`)) {
                    document.getElementById(`${vacioLlenoH + y}`).classList.add("noSpacio");
                    document.getElementById(`${vacioLlenoH + y}`).classList.add("keyParaGirarIzq");
                    document.getElementById(`${vacioLlenoH + y}`).style.background = "rgba(255, 255, 255, 0.247)";
                    document.getElementById(`${vacioLlenoH + y}`).data += 1;
                }
                if (document.getElementById(`${(vacioLlenoH + y) - 1}`)) {
                    if (!((posicionDiv + 9) % 10 === 0)) { //control para que no se pinte en el otro extremo
                        document.getElementById(`${(vacioLlenoH + y) - 1}`).classList.add("noSpacio");
                        document.getElementById(`${(vacioLlenoH + y) - 1}`).style.background = "rgba(255, 255, 255, 0.247)";
                        document.getElementById(`${(vacioLlenoH + y) - 1}`).data += 1;
                    }
                }
                if (document.getElementById(`${(vacioLlenoH + y) + 1}`)) {
                    document.getElementById(`${(vacioLlenoH + y) + 1}`).classList.add("noSpacio");
                    document.getElementById(`${(vacioLlenoH + y) + 1}`).style.background = "rgba(255, 255, 255, 0.247)";
                    document.getElementById(`${(vacioLlenoH + y) + 1}`).data += 1;

                }
                //QUITAR GRIS
                if (document.getElementById(`${posicionDiv + 2 + i}`)) {
                    if (document.getElementById(`${posicionDiv + 2 + i}`).data === 1) {
                        document.getElementById(`${posicionDiv + 2 + i}`).classList.remove("noSpacio");
                        document.getElementById(`${posicionDiv + 2 + i}`).classList.remove("keyParaGirarArriba");
                        document.getElementById(`${posicionDiv + 2 + i}`).style.background = "";
                        document.getElementById(`${posicionDiv + 2 + i}`).data -= 1;
                    }
                    else if (document.getElementById(`${posicionDiv + 2 + i}`).data >= 2) {
                        document.getElementById(`${posicionDiv + 2 + i}`).data -= 1;
                    }
                }
                if (document.getElementById(`${(posicionDiv + 2 + i) - 10}`)) {
                    if (document.getElementById(`${(posicionDiv + 2 + i) - 10}`).data === 1) {
                        document.getElementById(`${(posicionDiv + 2 + i) - 10}`).classList.remove("noSpacio");
                        document.getElementById(`${(posicionDiv + 2 + i) - 10}`).style.background = "";
                        document.getElementById(`${(posicionDiv + 2 + i) - 10}`).data -= 1;
                    }
                    else if (document.getElementById(`${(posicionDiv + 2 + i) - 10}`).data >= 2) {
                        document.getElementById(`${(posicionDiv + 2 + i) - 10}`).data -= 1;
                    }
                }
                if (document.getElementById(`${(posicionDiv + 2 + i) + 10}`)) {
                    if (document.getElementById(`${(posicionDiv + 2 + i) + 10}`).data === 1) {
                        document.getElementById(`${(posicionDiv + 2 + i) + 10}`).classList.remove("noSpacio");
                        document.getElementById(`${(posicionDiv + 2 + i) + 10}`).style.background = "";
                        document.getElementById(`${(posicionDiv + 2 + i) + 10}`).data -= 1;
                    }
                    else if (document.getElementById(`${(posicionDiv + 2 + i) + 10}`).data >= 2) {
                        document.getElementById(`${(posicionDiv + 2 + i) + 10}`).data -= 1;
                    }
                }
                y = y + 10;
            }
        }

        function borrarAñadirGiroV() {
            let y = 0;
            //QUITAR GRIS AL GIRAR
            for (let i = 0; i <= numStop; i++) {
                if (document.getElementById(`${vacioBorrar + y}`)) {
                    if (document.getElementById(`${vacioBorrar + y}`).data === 1) {
                        document.getElementById(`${vacioBorrar + y}`).classList.remove("noSpacio");
                        document.getElementById(`${vacioBorrar + y}`).classList.remove("keyParaGirarIzq");
                        document.getElementById(`${vacioBorrar + y}`).style.background = "";
                        document.getElementById(`${vacioBorrar + y}`).data -= 1;
                    }
                    else if (document.getElementById(`${vacioBorrar + y}`).data >= 2) {
                        document.getElementById(`${vacioBorrar + y}`).data -= 1;
                    }
                }
                if (document.getElementById(`${(vacioBorrar + y) - 1}`)) {
                    if (document.getElementById(`${(vacioBorrar + y) - 1}`).data === 1) {
                        document.getElementById(`${(vacioBorrar + y) - 1}`).classList.remove("noSpacio");
                        document.getElementById(`${(vacioBorrar + y) - 1}`).style.background = "";
                        document.getElementById(`${(vacioBorrar + y) - 1}`).data -= 1;
                    }
                    else if (document.getElementById(`${(vacioBorrar + y) - 1}`).data >= 2) {
                        document.getElementById(`${(vacioBorrar + y) - 1}`).data -= 1;
                    }
                }
                if (document.getElementById(`${(vacioBorrar + y) + 1}`)) {
                    if (document.getElementById(`${(vacioBorrar + y) + 1}`).data === 1) {
                        document.getElementById(`${(vacioBorrar + y) + 1}`).classList.remove("noSpacio");
                        document.getElementById(`${(vacioBorrar + y) + 1}`).style.background = "";
                        document.getElementById(`${(vacioBorrar + y) + 1}`).data -= 1;
                    }
                    else if (document.getElementById(`${(vacioBorrar + y) + 1}`).data >= 2) {
                        document.getElementById(`${(vacioBorrar + y) + 1}`).data -= 1;
                    }
                }
                y = y + 10;
            }
            //AÑADIR GRIS
            // if ((posicionDiv + 9) % 10 === 0) { //control para que no se pinte el otro extremo
            //     iHorizontal = 0;
            //     numStop = numStop;
            // }
            if ((posicionDiv + numResta) % 10 === 0) {
                // iHorizontal = 0;
                numStop = numStop - 1;
            }
            // else {
            //     iHorizontal = 0;
            // }
            for (let i = 0; i <= numStop; i++) {
                if (document.getElementById(`${posicionDiv + 2 + i}`)) {
                    document.getElementById(`${posicionDiv + 2 + i}`).classList.add("noSpacio");
                    document.getElementById(`${posicionDiv + 2 + i}`).classList.add("keyParaGirarArriba");
                    document.getElementById(`${posicionDiv + 2 + i}`).style.background = "rgba(255, 255, 255, 0.247)";
                    document.getElementById(`${posicionDiv + 2 + i}`).data += 1;
                }
                if (document.getElementById(`${(posicionDiv + 2 + i) - 10}`)) {
                    document.getElementById(`${(posicionDiv + 2 + i) - 10}`).classList.add("noSpacio");
                    document.getElementById(`${(posicionDiv + 2 + i) - 10}`).style.background = "rgba(255, 255, 255, 0.247)";
                    document.getElementById(`${(posicionDiv + 2 + i) - 10}`).data += 1;
                }
                if (document.getElementById(`${(posicionDiv + 2 + i) + 10}`)) {
                    document.getElementById(`${(posicionDiv + 2 + i) + 10}`).classList.add("noSpacio");
                    document.getElementById(`${(posicionDiv + 2 + i) + 10}`).style.background = "rgba(255, 255, 255, 0.247)";
                    document.getElementById(`${(posicionDiv + 2 + i) + 10}`).data += 1;

                }
            }
        }
        console.log("25")
        console.log(document.getElementById(`25`).data)
    }

    function casillaDataCero() {
        window.addEventListener('load', (event) => {
            for (let i = 1; i <= 100; i++) {
                document.getElementById(`${i}`).data = 0
            }
        });
    }
    casillaDataCero()

    return (
        < >
            <div className='barcos'>
                <div className="barcoContainer">
                    <div className='barcos1'>
                        <div className='todosLosBarcos'><div className="drag1 arrastrable " id="barUno1" draggable="true"></div></div>
                        <div className='todosLosBarcos'><div className="drag1 arrastrable" id="barUno2" draggable="true"></div></div>
                        <div className='todosLosBarcos'><div className="drag1 arrastrable" id="barUno3" draggable="true"></div></div>
                        <div className='todosLosBarcos'><div className="drag1 arrastrable" id="barUno4" draggable="true"></div></div>
                    </div>
                    {/* <p>BARCOS LISTOS!</p> */}
                    <div className='barcos2'>
                        <div className='todosLosBarcos2'><div className="drag2 arrastrable" id="barDos1" draggable="true" onDoubleClick={comprobarGiro}></div></div>
                        <div className='todosLosBarcos2'><div className="drag2 arrastrable" id="barDos2" draggable="true" onDoubleClick={comprobarGiro}></div></div>
                        <div className='todosLosBarcos2'><div className="drag2 arrastrable" id="barDos3" draggable="true" onDoubleClick={comprobarGiro}></div></div>
                    </div>
                    <div className='barcos3'>
                        <div className='todosLosBarcos3'><div className="drag3 arrastrable" id="barTres1" draggable="true" onDoubleClick={comprobarGiro}></div></div>
                        <div className='todosLosBarcos3'><div className="drag3 arrastrable" id="barTres2" draggable="true" onDoubleClick={comprobarGiro}></div></div>
                    </div>
                    <div className='barcos4'>
                        <div className='todosLosBarcos' > <div className="drag4 arrastrable" id="barCuatro" draggable="true" onDoubleClick={comprobarGiro}></div></div>
                    </div>
                </div>

            </div>
            <div className="gridContainer">
                <div className="grid" id="tableromover">
                    <div className="zona-de-soltar" id="1"></div>
                    <div className="zona-de-soltar" id="2"></div>
                    <div className="zona-de-soltar" id="3"></div>
                    <div className="zona-de-soltar" id="4"></div>
                    <div className="zona-de-soltar" id="5"></div>
                    <div className="zona-de-soltar" id="6"></div>
                    <div className="zona-de-soltar" id="7"></div>
                    <div className="zona-de-soltar" id="8"></div>
                    <div className="zona-de-soltar" id="9"></div>
                    <div className="zona-de-soltar" id="10"></div>
                    <div className="zona-de-soltar" id="11"></div>
                    <div className="zona-de-soltar" id="12"></div>
                    <div className="zona-de-soltar" id="13"></div>
                    <div className="zona-de-soltar" id="14"></div>
                    <div className="zona-de-soltar" id="15"></div>
                    <div className="zona-de-soltar" id="16"></div>
                    <div className="zona-de-soltar" id="17"></div>
                    <div className="zona-de-soltar" id="18"></div>
                    <div className="zona-de-soltar" id="19"></div>
                    <div className="zona-de-soltar" id="20"></div>
                    <div className="zona-de-soltar" id="21"></div>
                    <div className="zona-de-soltar" id="22"></div>
                    <div className="zona-de-soltar" id="23"></div>
                    <div className="zona-de-soltar" id="24"></div>
                    <div className="zona-de-soltar" id="25"></div>
                    <div className="zona-de-soltar" id="26"></div>
                    <div className="zona-de-soltar" id="27"></div>
                    <div className="zona-de-soltar" id="28"></div>
                    <div className="zona-de-soltar" id="29"></div>
                    <div className="zona-de-soltar" id="30"></div>
                    <div className="zona-de-soltar" id="31"></div>
                    <div className="zona-de-soltar" id="32"></div>
                    <div className="zona-de-soltar" id="33"></div>
                    <div className="zona-de-soltar" id="34"></div>
                    <div className="zona-de-soltar" id="35"></div>
                    <div className="zona-de-soltar" id="36"></div>
                    <div className="zona-de-soltar" id="37"></div>
                    <div className="zona-de-soltar" id="38"></div>
                    <div className="zona-de-soltar" id="39"></div>
                    <div className="zona-de-soltar" id="40"></div>
                    <div className="zona-de-soltar" id="41"></div>
                    <div className="zona-de-soltar" id="42"></div>
                    <div className="zona-de-soltar" id="43"></div>
                    <div className="zona-de-soltar" id="44"></div>
                    <div className="zona-de-soltar" id="45"></div>
                    <div className="zona-de-soltar" id="46"></div>
                    <div className="zona-de-soltar" id="47"></div>
                    <div className="zona-de-soltar" id="48"></div>
                    <div className="zona-de-soltar" id="49"></div>
                    <div className="zona-de-soltar" id="50"></div>
                    <div className="zona-de-soltar" id="51"></div>
                    <div className="zona-de-soltar" id="52"></div>
                    <div className="zona-de-soltar" id="53"></div>
                    <div className="zona-de-soltar" id="54"></div>
                    <div className="zona-de-soltar" id="55"></div>
                    <div className="zona-de-soltar" id="56"></div>
                    <div className="zona-de-soltar" id="57"></div>
                    <div className="zona-de-soltar" id="58"></div>
                    <div className="zona-de-soltar" id="59"></div>
                    <div className="zona-de-soltar" id="60"></div>
                    <div className="zona-de-soltar" id="61"></div>
                    <div className="zona-de-soltar" id="62"></div>
                    <div className="zona-de-soltar" id="63"></div>
                    <div className="zona-de-soltar" id="64"></div>
                    <div className="zona-de-soltar" id="65"></div>
                    <div className="zona-de-soltar" id="66"></div>
                    <div className="zona-de-soltar" id="67"></div>
                    <div className="zona-de-soltar" id="68"></div>
                    <div className="zona-de-soltar" id="69"></div>
                    <div className="zona-de-soltar" id="70"></div>
                    <div className="zona-de-soltar" id="71"></div>
                    <div className="zona-de-soltar" id="72"></div>
                    <div className="zona-de-soltar" id="73"></div>
                    <div className="zona-de-soltar" id="74"></div>
                    <div className="zona-de-soltar" id="75"></div>
                    <div className="zona-de-soltar" id="76"></div>
                    <div className="zona-de-soltar" id="77"></div>
                    <div className="zona-de-soltar" id="78"></div>
                    <div className="zona-de-soltar" id="79"></div>
                    <div className="zona-de-soltar" id="80"></div>
                    <div className="zona-de-soltar" id="81"></div>
                    <div className="zona-de-soltar" id="82"></div>
                    <div className="zona-de-soltar" id="83"></div>
                    <div className="zona-de-soltar" id="84"></div>
                    <div className="zona-de-soltar" id="85"></div>
                    <div className="zona-de-soltar" id="86"></div>
                    <div className="zona-de-soltar" id="87"></div>
                    <div className="zona-de-soltar" id="88"></div>
                    <div className="zona-de-soltar" id="89"></div>
                    <div className="zona-de-soltar" id="90"></div>
                    <div className="zona-de-soltar" id="91"></div>
                    <div className="zona-de-soltar" id="92"></div>
                    <div className="zona-de-soltar" id="93"></div>
                    <div className="zona-de-soltar" id="94"></div>
                    <div className="zona-de-soltar" id="95"></div>
                    <div className="zona-de-soltar" id="96"></div>
                    <div className="zona-de-soltar" id="97"></div>
                    <div className="zona-de-soltar" id="98"></div>
                    <div className="zona-de-soltar" id="99"></div>
                    <div className="zona-de-soltar" id="100"></div>

                </div>
            </div>



        </>

    )
}



export default TableroBarcos;
