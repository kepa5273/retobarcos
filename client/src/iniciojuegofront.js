import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function InicioJuego() {
    traerPosciones()
    function traerPosciones() {
        fetch("http://localhost:9000/iniciojuegoback/")

            .then(response => response.json()) //va a recibir un Json(es lo que le quiere decir)
            .then(data => {
                console.log("inicio juego");
                console.log(data[0]);

                let barCuatro = data[0].barCuatro;
                let barTres1 = data[0].barTres1;
                let barTres2 = data[0].barTres2;
                let barDos1 = data[0].barDos1;
                let barDos2 = data[0].barDos2;
                let barDos3 = data[0].barDos3;
                let barUno1 = data[0].barUno1;
                let barUno2 = data[0].barUno2;
                let barUno3 = data[0].barUno3;
                let barUno4 = data[0].barUno4;

                document.getElementById(`${barUno1}`).classList.add("ocupada");
                document.getElementById(`${barUno1}`).classList.add("barUno1");
                document.getElementById(`${barUno1}`).style.background = "yellow";

                document.getElementById(`${barUno2}`).classList.add("ocupada");
                document.getElementById(`${barUno2}`).classList.add("barUno2");
                document.getElementById(`${barUno2}`).style.background = "yellow";

                document.getElementById(`${barUno3}`).classList.add("ocupada");
                document.getElementById(`${barUno3}`).classList.add("barUno3");
                document.getElementById(`${barUno3}`).style.background = "yellow";

                document.getElementById(`${barUno4}`).classList.add("ocupada");
                document.getElementById(`${barUno4}`).classList.add("barUno4");
                document.getElementById(`${barUno4}`).style.background = "green";


                for (let i = 0; i < 4; i++) {
                    document.getElementById(`${barCuatro[i]}`).classList.add("ocupada");
                    document.getElementById(`${barCuatro[i]}`).classList.add("barCuatro");
                    document.getElementById(`${barCuatro[i]}`).style.background = "yellow";
                }
                for (let i = 0; i < 3; i++) {
                    document.getElementById(`${barTres1[i]}`).classList.add("ocupada");
                    document.getElementById(`${barTres1[i]}`).classList.add("barTres1");
                    document.getElementById(`${barTres1[i]}`).style.background = "yellow";
                }
                for (let i = 0; i < 3; i++) {
                    document.getElementById(`${barTres2[i]}`).classList.add("ocupada");
                    document.getElementById(`${barTres2[i]}`).classList.add("barTres2");
                    document.getElementById(`${barTres2[i]}`).style.background = "yellow";
                }
                for (let i = 0; i < 2; i++) {
                    document.getElementById(`${barDos1[i]}`).classList.add("ocupada");
                    document.getElementById(`${barDos1[i]}`).classList.add("barDos1");
                    document.getElementById(`${barDos1[i]}`).style.background = "yellow";
                }
                for (let i = 0; i < 2; i++) {
                    document.getElementById(`${barDos2[i]}`).classList.add("ocupada");
                    document.getElementById(`${barDos2[i]}`).classList.add("barDos2");
                    document.getElementById(`${barDos2[i]}`).style.background = "yellow";
                }
                for (let i = 0; i < 2; i++) {
                    document.getElementById(`${barDos3[i]}`).classList.add("ocupada");
                    document.getElementById(`${barDos3[i]}`).classList.add("barDos3");
                    document.getElementById(`${barDos3[i]}`).style.background = "yellow";
                }




            })
    }

    return (
        <>
            <p>AQUI ESTÁN MIS BARCOS</p>
            <div className="grid">
                <div id="1"></div>
                <div id="2"></div>
                <div id="3"></div>
                <div id="4"></div>
                <div id="5"></div>
                <div id="6"></div>
                <div id="7"></div>
                <div id="8"></div>
                <div id="9"></div>
                <div id="10"></div>
                <div id="11"></div>
                <div id="12"></div>
                <div id="13"></div>
                <div id="14"></div>
                <div id="15"></div>
                <div id="16"></div>
                <div id="17"></div>
                <div id="18"></div>
                <div id="19"></div>
                <div id="20"></div>
                <div id="21"></div>
                <div id="22"></div>
                <div id="23"></div>
                <div id="24"></div>
                <div id="25"></div>
                <div id="26"></div>
                <div id="27"></div>
                <div id="28"></div>
                <div id="29"></div>
                <div id="30"></div>
                <div id="31"></div>
                <div id="32"></div>
                <div id="33"></div>
                <div id="34"></div>
                <div id="35"></div>
                <div id="36"></div>
                <div id="37"></div>
                <div id="38"></div>
                <div id="39"></div>
                <div id="40"></div>
                <div id="41"></div>
                <div id="42"></div>
                <div id="43"></div>
                <div id="44"></div>
                <div id="45"></div>
                <div id="46"></div>
                <div id="47"></div>
                <div id="48"></div>
                <div id="49"></div>
                <div id="50"></div>
                <div id="51"></div>
                <div id="52"></div>
                <div id="53"></div>
                <div id="54"></div>
                <div id="55"></div>
                <div id="56"></div>
                <div id="57"></div>
                <div id="58"></div>
                <div id="59"></div>
                <div id="60"></div>
                <div id="61"></div>
                <div id="62"></div>
                <div id="63"></div>
                <div id="64"></div>
                <div id="65"></div>
                <div id="66"></div>
                <div id="67"></div>
                <div id="68"></div>
                <div id="69"></div>
                <div id="70"></div>
                <div id="71"></div>
                <div id="72"></div>
                <div id="73"></div>
                <div id="74"></div>
                <div id="75"></div>
                <div id="76"></div>
                <div id="77"></div>
                <div id="78"></div>
                <div id="79"></div>
                <div id="80"></div>
                <div id="81"></div>
                <div id="82"></div>
                <div id="83"></div>
                <div id="84"></div>
                <div id="85"></div>
                <div id="86"></div>
                <div id="87"></div>
                <div id="88"></div>
                <div id="89"></div>
                <div id="90"></div>
                <div id="91"></div>
                <div id="92"></div>
                <div id="93"></div>
                <div id="94"></div>
                <div id="95"></div>
                <div id="96"></div>
                <div id="97"></div>
                <div id="98"></div>
                <div id="99"></div>
                <div id="100"></div>
            </div>
            <br />

            <p>AQUI DISPARO</p>
            <div className="grid">
                <div id="1"></div>
                <div id="2"></div>
                <div id="3"></div>
                <div id="4"></div>
                <div id="5"></div>
                <div id="6"></div>
                <div id="7"></div>
                <div id="8"></div>
                <div id="9"></div>
                <div id="10"></div>
                <div id="11"></div>
                <div id="12"></div>
                <div id="13"></div>
                <div id="14"></div>
                <div id="15"></div>
                <div id="16"></div>
                <div id="17"></div>
                <div id="18"></div>
                <div id="19"></div>
                <div id="20"></div>
                <div id="21"></div>
                <div id="22"></div>
                <div id="23"></div>
                <div id="24"></div>
                <div id="25"></div>
                <div id="26"></div>
                <div id="27"></div>
                <div id="28"></div>
                <div id="29"></div>
                <div id="30"></div>
                <div id="31"></div>
                <div id="32"></div>
                <div id="33"></div>
                <div id="34"></div>
                <div id="35"></div>
                <div id="36"></div>
                <div id="37"></div>
                <div id="38"></div>
                <div id="39"></div>
                <div id="40"></div>
                <div id="41"></div>
                <div id="42"></div>
                <div id="43"></div>
                <div id="44"></div>
                <div id="45"></div>
                <div id="46"></div>
                <div id="47"></div>
                <div id="48"></div>
                <div id="49"></div>
                <div id="50"></div>
                <div id="51"></div>
                <div id="52"></div>
                <div id="53"></div>
                <div id="54"></div>
                <div id="55"></div>
                <div id="56"></div>
                <div id="57"></div>
                <div id="58"></div>
                <div id="59"></div>
                <div id="60"></div>
                <div id="61"></div>
                <div id="62"></div>
                <div id="63"></div>
                <div id="64"></div>
                <div id="65"></div>
                <div id="66"></div>
                <div id="67"></div>
                <div id="68"></div>
                <div id="69"></div>
                <div id="70"></div>
                <div id="71"></div>
                <div id="72"></div>
                <div id="73"></div>
                <div id="74"></div>
                <div id="75"></div>
                <div id="76"></div>
                <div id="77"></div>
                <div id="78"></div>
                <div id="79"></div>
                <div id="80"></div>
                <div id="81"></div>
                <div id="82"></div>
                <div id="83"></div>
                <div id="84"></div>
                <div id="85"></div>
                <div id="86"></div>
                <div id="87"></div>
                <div id="88"></div>
                <div id="89"></div>
                <div id="90"></div>
                <div id="91"></div>
                <div id="92"></div>
                <div id="93"></div>
                <div id="94"></div>
                <div id="95"></div>
                <div id="96"></div>
                <div id="97"></div>
                <div id="98"></div>
                <div id="99"></div>
                <div id="100"></div>
            </div>

        </>
    )

}

export default InicioJuego;