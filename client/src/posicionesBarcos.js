import { Redirect } from "react-router";
import Juego from "./juego"
import swal from 'sweetalert';


// swal("BIENVENIDO", "Coloque los barcos en el tablero", "info");
function posicionesBarcos() {

    
    let barcosEnTablero = {};
    let barDos1 = [];
    let barDos2 = [];
    let barDos3 = [];
    let barTres1 = [];
    let barTres2 = [];
    let barCuatro = [];
    let barcosDos = [barDos1, barDos2, barDos3];
    let barcosTres = [barTres1, barTres2];
    let jugador;
    // barcosEnTablero.jugador = props.login;

    if (document.getElementById(`barUno1`).data && document.getElementById(`barUno2`).data && document.getElementById(`barUno3`).data && document.getElementById(`barUno4`).data && document.getElementById(`barDos1`).data && document.getElementById(`barDos2`).data && document.getElementById(`barDos3`).data && document.getElementById(`barTres1`).data && document.getElementById(`barTres2`).data && document.getElementById(`barCuatro`).data){
           
        //BARCOS DE UNO        
        barcosEnTablero.barUno1 = [document.getElementById(`barUno1`).data];
        barcosEnTablero.barUno2 = [document.getElementById(`barUno2`).data];
        barcosEnTablero.barUno3 = [document.getElementById(`barUno3`).data];
        barcosEnTablero.barUno4 = [document.getElementById(`barUno4`).data];

        //BARCOS DE DOS
        for (let z = 0; z < barcosDos.length; z++) {
            if (document.getElementById(`barDos${z + 1}`).classList.contains("rotate")) {
                let y = 0;
                for (let i = 0; i <= 1; i++) {
                    barcosDos[z][i] = document.getElementById(`barDos${z + 1}`).data + y;
                    y = y + 10;
                }
            }
            else {
                for (let i = 0; i <= 1; i++) {
                    barcosDos[z][i] = document.getElementById(`barDos${z + 1}`).data + i;
                }
            }
        }
        barcosEnTablero.barDos1 = barDos1;
        barcosEnTablero.barDos2 = barDos2;
        barcosEnTablero.barDos3 = barDos3;

        //BARCOS DE TRES
        for (let z = 0; z < barcosTres.length; z++) {
            if (document.getElementById(`barTres${z + 1}`).classList.contains("rotate")) {
                let y = 0;
                for (let i = 0; i <= 2; i++) {
                    barcosTres[z][i] = document.getElementById(`barTres${z + 1}`).data + y;
                    y = y + 10;
                }
            }
            else {
                for (let i = 0; i <= 2; i++) {
                    barcosTres[z][i] = document.getElementById(`barTres${z + 1}`).data + i;
                }
            }
        }
        barcosEnTablero.barTres1 = barTres1;
        barcosEnTablero.barTres2 = barTres2;


        //BARCO CUATRO
        if (document.getElementById(`barCuatro`).classList.contains("rotate")) {
            let x = 0;
            for (let i = 0; i <= 3; i++) {
                barCuatro[i] = document.getElementById(`barCuatro`).data + x;
                x = x + 10;
            }
        }
        else {
            for (let i = 0; i <= 3; i++) {
                barCuatro[i] = document.getElementById(`barCuatro`).data + i;
            }
        }
        barcosEnTablero.barCuatro = barCuatro;

        return barcosEnTablero;
        // return <Juego barcosEnTablero={barcosEnTablero} />



        //AQUÍ DEBERÍAMOS DE HACER UN POST A LA BASE DE DATOS Y METER LAS POSICIONES DEL USUARIO.
        
    //   let fetchBarcos = { //esto es un protocolo.
    //         method: "POST",
    //         body: JSON.stringify(barcosEnTablero),
    //         headers: {
            
    //         "Access-Control-Allow-Headers" : "Content-Type",
    //         "Content-Type": "application/json; charset = UTF-8",
    //         "Access-Control-Allow-Origin": "http://localhost:3000/tablerobarcos",
    //         "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    //          }
    //     }
    
        
        // fetch("http://localhost:9000/posicionesbarcosback/post/", fetchBarcos)
        // .then(response => response.json()) //va a recibir un Json(es lo que le quiere decir)
        // .then(data => {
        //     // console.log("DATOSSS");
        //     // console.log(data);
            
    
        // })
    


    }
    else{
        return false;
    }  

}

export default posicionesBarcos;