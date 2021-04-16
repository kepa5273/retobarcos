import React, { useState, useEffect, useRef } from "react";
import socket from "../Socket";
import "../App.css";

const Chat = ({ nombre }) => {
  console.log(nombre)
  const [mensaje, setMensaje] = useState("");

  const [mensajes, setMensajes] = useState([]);

  useEffect(() => { 
    socket.emit("conectado", nombre);
  }, [nombre]);

  useEffect(() => {
    socket.on("mensajes", (mensaje) => {
      setMensajes([...mensajes, mensaje]);
      console.log(mensajes)
    });
    return () => {
      socket.off();
    };
  });

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const submit = (e) => {
    e.preventDefault();
    socket.emit("mensaje", nombre, mensaje);
    setMensaje("");
  };

  return (
    <div>
      <div className="chat">
        {mensajes.map((e, i) => (
          <div key={i}>
            <div><p className="mensajeNombre">{e.nombre}</p></div>
            <div><span className="mensajeMensaje">{e.mensaje}</span></div>
          </div>
        ))}
        <div ref={divRef}></div>
      </div>
      <form onSubmit={submit}>
        <label htmlFor=""></label>
        <textarea
          name=""
          id=""
          cols="26"
          rows="1"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>
        <div><button className="but">Enviar</button></div>
      </form>
    </div>
  );
};

export default Chat;
