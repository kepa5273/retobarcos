

import flecha from "./flecha-02.png";
function Intrucciones() {
    return (
        <div className="instrucciones">
            <div className="instruccionesDiv">
                <div className="instruccionesP">
                    <p className="instruccionesS bold">Coloca tus barcos en el tablero</p>
                    <span className="instruccionesS noMargin">Modifica las posiciones tantas veces quieras</span>
                    <span className="instruccionesS noMargin">Gira los barcos haciendo doble click</span>
                </div>
                <div><img className="instruccionesI" src={flecha} width="30" /></div>
                <div className="instruccionesPNoMargin">
                    <p className="instruccionesS bold">Introduce tu nombre</p>
                    <span className="instruccionesS noMargin">Este será tu nombre de jugador</span>
                    <span className="instruccionesS noMargin">¡Se creativo/a!</span>
                </div>
                <div><img className="instruccionesI" src={flecha} width="30" /></div>
                <div className="instruccionesPNoMargin">
                    <p className="instruccionesS bold">¡A jugar!</p>
                    <span className="instruccionesS noMargin">Pulsa el botón que te dirigirá a la partida</span>
                    <span className="instruccionesS noMargin">¡Suerte!</span>
                </div>
            </div>
        </div>
    )
}
export default Intrucciones;