function dragdrop() {

    let elementoArrastrado;
    let idBarco;
    let numeroCasilla;
    let vertical;
    let numStop;
    let numResta;
    let idBarcoMover;
    let ocupadasArriba = [];
    let ocupadasIzq = [];
    let iHorizontal;
    let dataBarco;
    let dataCasilla;


    document.addEventListener("drag", function (event) {
    }, false);

    document.addEventListener("dragstart", function (event) {
        //RESETEO DE ZONA-DE-SOLTAR
        for (let i = 1; i <= 100; i++) {
            document.getElementById(`${i}`).classList.add("zona-de-soltar")
        }

        event.stopImmediatePropagation(); //importante porque sino repite el bucle dos veces!!!
        elementoArrastrado = event.target; //AQUI TENGO QUE BARCO ESTOY ARRASTRANDO
        //if(elementoArrastrado.data){
        //  elementoArrastrado.classList.add("hidden")
        //};

        idBarco = parseInt(elementoArrastrado.className.substring(4, 5)); //AQUI TENGO EL NUMERO DE BARCO!
        idBarcoMover = elementoArrastrado.id;
        elementoArrastrado.style.opacity = .5; //A LA HORA DE ARRASTRARLO LA OPACIDAD ES LA MITAD
        vertical = elementoArrastrado.classList.contains("rotate"); //es vertical si tiene la clase rotar
        ocupadasArriba = [];
        ocupadasIzq = [];

        ////ERRRRORRRRRRRRRRRR///////
        //NO CRUZAR AL POSARLOS: VERTICALES
        //
        if (vertical) {
            for (let i = 1; i <= 100; i++) {
                if (document.getElementById(`${i}`).classList.contains("keyParaGirarArriba")) {
                    ocupadasArriba.push(parseInt(document.getElementById(`${i}`).id));
                }
            }
            if (idBarco === 2 || idBarco === 3 || idBarco === 4) {
                for (let i = 0; i <= ocupadasArriba.length; i++) {
                    if (document.getElementById(`${ocupadasArriba[i] - 20}`)) {
                        document.getElementById(`${ocupadasArriba[i] - 20}`).classList.remove("zona-de-soltar")
                    }
                }
            }
            if (idBarco === 3 || idBarco === 4) {
                for (let i = 0; i <= ocupadasArriba.length; i++) {
                    if (document.getElementById(`${ocupadasArriba[i] - 30}`)) {
                        document.getElementById(`${ocupadasArriba[i] - 30}`).classList.remove("zona-de-soltar")
                    }
                }
            }
            if (idBarco === 4) {
                for (let i = 0; i <= ocupadasArriba.length; i++) {
                    if (document.getElementById(`${ocupadasArriba[i] - 40}`)) {
                        document.getElementById(`${ocupadasArriba[i] - 40}`).classList.remove("zona-de-soltar")
                    }
                }
            }
        }
        //NO CRUZAR AL POSARLOS: HORIZONTALES
        if (!vertical) {
            for (let i = 1; i <= 100; i++) {
                if (document.getElementById(`${i}`).classList.contains("keyParaGirarIzq")) {
                    if (((parseInt(document.getElementById(`${i}`).id)) + 9) % 10 != 0) {
                        ocupadasIzq.push(parseInt(document.getElementById(`${i}`).id))
                    }
                }
            }
            if (idBarco === 2 || idBarco === 3 || idBarco === 4) {
                for (let i = 0; i <= ocupadasIzq.length; i++) {
                    if (document.getElementById(`${ocupadasIzq[i] - 2}`)) {
                        document.getElementById(`${ocupadasIzq[i] - 2}`).classList.remove("zona-de-soltar")
                    }
                }
            }
            if (idBarco === 3 || idBarco === 4) {
                for (let i = 0; i <= ocupadasIzq.length; i++) {
                    if (document.getElementById(`${ocupadasIzq[i] - 3}`)) {
                        document.getElementById(`${ocupadasIzq[i] - 3}`).classList.remove("zona-de-soltar")
                    }
                }
            }
            if (idBarco === 4) {
                for (let i = 0; i <= ocupadasIzq.length; i++) {
                    if (document.getElementById(`${ocupadasIzq[i] - 4}`)) {
                        document.getElementById(`${ocupadasIzq[i] - 4}`).classList.remove("zona-de-soltar")
                    }
                }
            }
        }
        ////ERRRRORRRRRRRRRRRR///////

        //HORIZONTALES: NO SALIRSE DEL TABLERO
        if ((idBarco === 2 && !vertical) || (idBarco === 3 && !vertical) || (idBarco === 4 && !vertical)) {
            for (let i = 10; i <= 100; i = i + 10) {
                document.getElementById(`${i}`).classList.remove("zona-de-soltar");
            }
        }
        if ((idBarco === 3 && !vertical) || (idBarco === 4 && !vertical)) {
            for (let i = 9; i <= 100; i = i + 10) {
                document.getElementById(`${i}`).classList.remove("zona-de-soltar");
            }
        }
        if (idBarco === 4 && !vertical) {
            for (let i = 8; i <= 100; i = i + 10) {
                document.getElementById(`${i}`).classList.remove("zona-de-soltar");
            }
        }

        //VERTICALES: NO SALIRSE DEL TABLERO
        if ((idBarco === 2 && vertical) || (idBarco === 3 && vertical) || (idBarco === 4 && vertical)) {
            for (let i = 91; i <= 100; i++) {
                document.getElementById(`${i}`).classList.remove("zona-de-soltar");
            }
        }
        if ((idBarco === 3 && vertical) || (idBarco === 4 && vertical)) {
            for (let i = 81; i <= 100; i++) {
                document.getElementById(`${i}`).classList.remove("zona-de-soltar");
            }
        }
        if (idBarco === 4 && vertical) {
            for (let i = 71; i <= 100; i++) {
                document.getElementById(`${i}`).classList.remove("zona-de-soltar");
            }
        }

        // PARA BORRAR EL GRIS Y LA CLASE NOSPACIO
        dataBarco = parseInt(elementoArrastrado.data);
        //VERTICAL
        if (dataBarco) {
            if (vertical) {
                ctrlVertNoSpacio();
                for (let i = 0; i <= numStop; i = i + 10) {
                    if (document.getElementById(`${(dataBarco - 9) + i}`)) {
                        if (!(dataBarco % 10 === 0)) { //control para que no se pinten en la otra esquina                         
                            if (document.getElementById(`${(dataBarco - 9) + i}`).data === 1) {
                                document.getElementById(`${(dataBarco - 9) + i}`).classList.remove("noSpacio");
                                if(document.getElementById(`${(dataBarco - 9) + 10}`)){
                                document.getElementById(`${(dataBarco - 9) + 10}`).classList.remove("keyParaGirarArriba");}
                                document.getElementById(`${(dataBarco - 9) + i}`).style.background = "";
                                document.getElementById(`${(dataBarco - 9) + i}`).data -= 1;
                            }
                            else if (document.getElementById(`${(dataBarco - 9) + i}`).data >= 2) {
                                document.getElementById(`${(dataBarco - 9) + i}`).data -= 1;
                            }
                        }
                    }
                    if (document.getElementById(`${(dataBarco - 10) + i}`)) {
                        if (document.getElementById(`${(dataBarco - 10) + i}`).data === 1) {
                            document.getElementById(`${(dataBarco - 10) + i}`).classList.remove("noSpacio");
                            document.getElementById(`${(dataBarco - 10) + i}`).classList.remove("keyParaGirarIzq");
                            document.getElementById(`${dataBarco}`).classList.remove("keyParaGirarArriba");
                            document.getElementById(`${(dataBarco - 10) + i}`).style.background = "";
                            document.getElementById(`${(dataBarco - 10) + i}`).data -= 1;
                        }
                        else if (document.getElementById(`${(dataBarco - 10) + i}`).data >= 2) {
                            document.getElementById(`${(dataBarco - 10) + i}`).data -= 1;
                        }
                    }
                    if (document.getElementById(`${(dataBarco - 11) + i}`)) {
                        if (!((dataBarco + 9) % 10 === 0)) { //control para que no se pinten en la otra esquina
                            if (document.getElementById(`${(dataBarco - 11) + i}`).data === 1) {
                                document.getElementById(`${(dataBarco - 11) + i}`).classList.remove("noSpacio");
                                if(document.getElementById(`${(dataBarco - 11) + 10}`)){
                                document.getElementById(`${(dataBarco - 11) + 10}`).classList.remove("keyParaGirarArriba");
                                }
                                document.getElementById(`${(dataBarco - 11) + i}`).style.background = "";
                                document.getElementById(`${(dataBarco - 11) + i}`).data -= 1;
                            }
                            else if (document.getElementById(`${(dataBarco - 11) + i}`).data >= 2) {
                                document.getElementById(`${(dataBarco - 11) + i}`).data -= 1;
                            }
                        }
                    }
                }
            }

            //HORIZONTAL            
            if (!vertical) {
                ctrlHrzNoSpacio();
                //bucle para borrar NoSpacio
                for (let i = iHorizontal; i <= numStop; i++) {
                    if (document.getElementById(`${(dataBarco + 9) + i}`)) {
                        if (document.getElementById(`${(dataBarco + 9) + i}`).data === 1) {
                            document.getElementById(`${(dataBarco + 9) + i}`).classList.remove("noSpacio");
                            if(document.getElementById(`${(dataBarco + 9) + 1}`)){
                            document.getElementById(`${(dataBarco + 9) + 1}`).classList.remove("keyParaGirarIzq");}
                            document.getElementById(`${(dataBarco + 9) + i}`).style.background = "";
                            document.getElementById(`${(dataBarco + 9) + i}`).data -= 1;
                        }
                        else if (document.getElementById(`${(dataBarco + 9) + i}`).data >= 2) {
                            document.getElementById(`${(dataBarco + 9) + i}`).data -= 1;
                        }
                    }
                    if (document.getElementById(`${(dataBarco - 1) + i}`)) {
                        if (document.getElementById(`${(dataBarco - 1) + i}`).data === 1) {
                            document.getElementById(`${(dataBarco - 1) + i}`).classList.remove("noSpacio");
                            document.getElementById(`${(dataBarco - 1) + i}`).classList.remove("keyParaGirarArriba");
                            if(document.getElementById(`${(dataBarco - 1) + 1}`)){
                            document.getElementById(`${(dataBarco - 1) + 1}`).classList.remove("keyParaGirarIzq");}
                            document.getElementById(`${(dataBarco - 1) + i}`).style.background = "";
                            document.getElementById(`${(dataBarco - 1) + i}`).data -= 1;

                        }
                        else if (document.getElementById(`${(dataBarco - 1) + i}`).data >= 2) {
                            document.getElementById(`${(dataBarco - 1) + i}`).data -= 1;
                        }
                    }
                    if (document.getElementById(`${(dataBarco - 11) + i}`)) {
                        if (document.getElementById(`${(dataBarco - 11) + i}`).data === 1) {
                            document.getElementById(`${(dataBarco - 11) + i}`).classList.remove("noSpacio");
                            if (document.getElementById(`${(dataBarco - 11) + 1}`)) {
                                document.getElementById(`${(dataBarco - 11) + 1}`).classList.remove("keyParaGirarIzq");
                            }
                            document.getElementById(`${(dataBarco - 11) + i}`).style.background = "";
                            document.getElementById(`${(dataBarco - 11) + i}`).data -= 1;

                        }
                        else if (document.getElementById(`${(dataBarco - 11) + i}`).data >= 2) {
                            document.getElementById(`${(dataBarco - 11) + i}`).data -= 1;
                        }
                    }
                }
            }
        }

    }, false);

    document.addEventListener("dragend", function (event) {
        event.target.style.opacity = 1; //AL POSARLO DECUELVE SU OPACIDAD ORIGINAL  
        event.target.classList.remove("hidden");
    }, false);

    document.addEventListener("dragover", function (event) {
        event.preventDefault();
    }, false);
    document.addEventListener("dragenter", function (event) {
        vertical = document.querySelector(".rotate");
        numeroCasilla = parseInt(event.target.id);
        console.log(numeroCasilla);
        if (event.target.className === "zona-de-soltar") {
            event.target.style.background = "rgba(115, 153, 148, 0.993)"; //TE LO PINTA DE MORADO SI EL ESPACIO ES VÁLIDO
            // if (vertical) {
            //     if (idBarco === 2) {
            //         document.getElementById(`${numeroCasilla + 10}`).style.background = "rgba(115, 153, 148, 0.993)"; 
            //     }
            // }
        }
        //////////prueba///morado

    }, false);

    document.addEventListener("dragleave", function (event) {
        numeroCasilla = parseInt(event.target.id);
        if (event.target.className === "zona-de-soltar") {
            event.target.style.background = ""; //DEVUELVE EL ESTADP ORIGINAL. LE QUITA EL MORADO. 
            // if (vertical) {
            //     if (idBarco === 2) {
            //         document.getElementById(`${numeroCasilla + 10}`).style.background = ""; 
            //     }
            // }
        }
    }, false);

    document.addEventListener("drop", function (event) {
        event.preventDefault();
        if (event.target.className === "zona-de-soltar" || event.target.className === "noSpacio") {
            event.target.style.background = ""; //EL COLOR MORADO DESAPARECE CUANDO HAS POSADO UN BARCO
            elementoArrastrado.parentNode.removeChild(elementoArrastrado); //ESTO ES PARA QUE EL BARCO PUEDA MOVERSE DEL DIV DONDE ESTABA EN UN PRINCIPIO. QUITARLO DEL DIV DONDE ESTABA
            event.target.appendChild(elementoArrastrado); //PONERLO EN EL DIV NUEVO.
            vertical = elementoArrastrado.classList.contains("rotate");
            numeroCasilla = parseInt(event.target.id); // QUÉ CASILLLA HE CAÍDO???
            elementoArrastrado.data = numeroCasilla;

            //VERTICAL
            if (vertical) {
                ctrlVertNoSpacio();
                for (let i = 0; i <= numStop; i = i + 10) {
                    if (document.getElementById(`${(numeroCasilla - 9) + i}`)) {
                        if (!(numeroCasilla % 10 === 0)) { //control para que no se pinten en la otra esquina
                            document.getElementById(`${(numeroCasilla - 9) + i}`).classList.add("noSpacio");
                            if (document.getElementById(`${(numeroCasilla - 9) + 10}`)) {
                                document.getElementById(`${(numeroCasilla - 9) + 10}`).classList.add("keyParaGirarArriba")
                            }
                            document.getElementById(`${(numeroCasilla - 9) + i}`).style.background = " rgba(255, 255, 255, 0.247)";
                            document.getElementById(`${(numeroCasilla - 9) + i}`).data = document.getElementById(`${(numeroCasilla - 9) + i}`).data + 1;
                        }
                    }
                    if (document.getElementById(`${(numeroCasilla - 10) + i}`)) {
                        document.getElementById(`${(numeroCasilla - 10) + i}`).classList.add("noSpacio");
                        document.getElementById(`${(numeroCasilla - 10) + i}`).classList.add("keyParaGirarIzq");
                        if (document.getElementById(`${numeroCasilla}`)) {
                            document.getElementById(`${numeroCasilla}`).classList.add("keyParaGirarArriba")
                        }
                        document.getElementById(`${(numeroCasilla - 10) + i}`).style.background = " rgba(255, 255, 255, 0.247)";
                        document.getElementById(`${(numeroCasilla - 10) + i}`).data = document.getElementById(`${(numeroCasilla - 10) + i}`).data + 1;

                    }
                    if (document.getElementById(`${(numeroCasilla - 11) + i}`)) {
                        if (!((numeroCasilla + 9) % 10 === 0)) { //control para que no se pinten en la otra esquina
                            document.getElementById(`${(numeroCasilla - 11) + i}`).classList.add("noSpacio");
                            if (document.getElementById(`${(numeroCasilla - 11) + 10}`)) {
                                document.getElementById(`${(numeroCasilla - 11) + 10}`).classList.add("keyParaGirarArriba")
                            }
                            document.getElementById(`${(numeroCasilla - 11) + i}`).style.background = " rgba(255, 255, 255, 0.247)";
                            document.getElementById(`${(numeroCasilla - 11) + i}`).data = document.getElementById(`${(numeroCasilla - 11) + i}`).data + 1;

                        }
                    }
                }
            }

            //HORIZONTAL
            else if (!vertical) {
                ctrlHrzNoSpacio();
                //bucle para pintar
                for (let i = iHorizontal; i <= numStop; i++) {
                    if (document.getElementById(`${(numeroCasilla + 9) + i}`)) {
                        document.getElementById(`${(numeroCasilla + 9) + i}`).classList.add("noSpacio");
                        if (document.getElementById(`${(numeroCasilla + 9) + 1}`)) {
                            document.getElementById(`${(numeroCasilla + 9) + 1}`).classList.add("keyParaGirarIzq")
                        }
                        document.getElementById(`${(numeroCasilla + 9) + i}`).style.background = " rgba(255, 255, 255, 0.247)";
                        document.getElementById(`${(numeroCasilla + 9) + i}`).data += 1;

                    }
                    if (document.getElementById(`${(numeroCasilla - 1) + i}`)) {
                        document.getElementById(`${(numeroCasilla - 1) + i}`).classList.add("noSpacio");
                        document.getElementById(`${(numeroCasilla - 1) + i}`).classList.add("keyParaGirarArriba");
                        if (document.getElementById(`${(numeroCasilla - 1) + 1}`)) {
                            document.getElementById(`${(numeroCasilla - 1) + 1}`).classList.add("keyParaGirarIzq")
                        }
                        document.getElementById(`${(numeroCasilla - 1) + i}`).style.background = " rgba(255, 255, 255, 0.247)";
                        document.getElementById(`${(numeroCasilla - 1) + i}`).data += 1;
                    }
                    if (document.getElementById(`${(numeroCasilla - 11) + i}`)) {
                        document.getElementById(`${(numeroCasilla - 11) + i}`).classList.add("noSpacio");
                        if (document.getElementById(`${(numeroCasilla - 11) + 1}`)) {
                            document.getElementById(`${(numeroCasilla - 11) + 1}`).classList.add("keyParaGirarIzq")
                        } document.getElementById(`${(numeroCasilla - 11) + i}`).style.background = "rgba(255, 255, 255, 0.247)";
                        document.getElementById(`${(numeroCasilla - 11) + i}`).data += 1;
                    }
                }
            }
        }
    }, false);

    function ctrlHrzNoSpacio() {
        //asignar número de bucles
        if (idBarco === 4) {
            numStop = 5;
            numResta = 3;
        }
        else if (idBarco === 3) {
            numStop = 4;
            numResta = 2;
        }
        else if (idBarco === 2) {
            numStop = 3;
            numResta = 1;
        }
        else if (idBarco === 1) {
            numStop = 2;
            numResta = 0;
        }
        //control para que si se pinta un barco en una esquina, no se desactiven casillas en el otro costado
        if ((numeroCasilla + 9) % 10 === 0) {
            iHorizontal = 1;
        }
        else if ((numeroCasilla + numResta) % 10 === 0) {
            iHorizontal = 0;
            numStop = numStop - 1;
        }
        else {
            iHorizontal = 0;
        }
    };

    function ctrlVertNoSpacio() {
        //asignar número de bucles
        if (idBarco === 4) {
            numStop = 50;
        }
        else if (idBarco === 3) {
            numStop = 40;
        }
        else if (idBarco === 2) {
            numStop = 30;
        }
        else if (idBarco === 1) {
            numStop = 20;
        }

    };


}



export default dragdrop;