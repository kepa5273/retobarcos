import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Login() {
  let [registro, setRegistro] = useState("");
  let [passwordRegistro, setPaswordRegistro] = useState("")
  let [login, setLogin] = useState("");
  let [passwordLogin, setPaswordLogin] = useState("")
  let fetchRegistro;
  let fetchLogin;
  let mensajeRegistro;
  let mensajeLogin;

  // useEffect(() => {

  // }, [])

  // aqui empieza la parte del registro--------------------------------------------------------------------------------

  function fregistro(event) {//funcion fara cambiar el valor de los inputs del registro
    switch (event.target.name) {
      case 'userReg':
        setRegistro(event.target.value)
        break;
      case 'passwordReg':
        setPaswordRegistro(event.target.value)
        break;
    }
  }

  function botonRegistro() {//con esta funcion envio los datos al back con el boton.
    fetchRegistro = { //esto es un protocolo.
      method: "POST",
      body: JSON.stringify({ registro: registro, passwordRegistro: passwordRegistro }),
      headers: {
        "Content-Type": "application/json; charset = UTF-8"
      }
    }


    if (registro === '' || passwordRegistro === '') {
      alert("rellene correctamente el formulario")
    } else {
      fetch('http://localhost:9000/loginback/login/post/', fetchRegistro)
        .then(response => response.json()) //va a recibir un Json(es lo que le quiere decir)
        .then(data => {
          // alert(data.mensaje)
          alert(data.mensaje)
          inputVacio()

        })
    }
  }

  // aqui empieza la parte del login--------------------------------------------------------------------------------

  function flogin(event) {//funcion fara cambiar el valor de los inputs del registro
    switch (event.target.name) {
      case 'userLog':
        setLogin(event.target.value)
        break;
      case 'passwordLog':
        setPaswordLogin(event.target.value)
        break;
    }
  }

  function botonLogin() {//con esta funcion envio los datos al back con el boton.
    fetchLogin = { //esto es un protocolo.
      method: "POST",
      body: JSON.stringify({ login: login, passwordLogin: passwordLogin }),
      headers: {
        "Content-Type": "application/json; charset = UTF-8"
      }
    }


    if (login === '' || passwordLogin === '') {
      alert("rellene correctamente el formulario")
    } else {
      fetch('http://localhost:9000/loginback/checkuser/post/', fetchLogin)
        .then(response => response.json()) //va a recibir un Json(es lo que le quiere decir)
        .then(data => {
          if (data.status) {
            alert(data.mensaje)
            window.location.href = 'http://localhost:3000/tablerobarcos'
          } else {
            alert(data.mensaje)
          }
          inputVacio()


        })
    }
  }

  function inputVacio() {
    setLogin('');
    setRegistro('');
    setPaswordLogin('');
    setPaswordRegistro('');
  }

  return (
    <div className="login">
      <h1 class="animate__animated animate__zoomIn  animate__delay-1s">HUNDIR LA FLOTA</h1>
      <h2 class="animate__animated animate__zoomIn  animate__delay-3s ">REGISTRO</h2>
      <div class="animate__animated animate__zoomIn  animate__delay-3s" id="registro">

        <input type="text" name="userReg" placeholder="user" onChange={fregistro} value={registro}></input>
        <input type="password" name="passwordReg" placeholder="password" onChange={fregistro} value={passwordRegistro} ></input>
        <button type="submit" onClick={botonRegistro} >registro</button>


      </div>
      <h2 class="animate__animated animate__zoomIn  animate__delay-4s">LOGIN</h2>
      <div class="animate__animated animate__zoomIn  animate__delay-4s" id="registro">

        <input type="text" name="userLog" placeholder="user" onChange={flogin} value={login}></input>
        <input type="password" name="passwordLog" placeholder="password " onChange={flogin} value={passwordLogin}></input>
        <button type="submit" onClick={botonLogin}>login</button>


      </div>
    </div>


  )

}
export default Login;








