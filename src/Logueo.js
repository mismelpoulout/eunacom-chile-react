import React from "react";
import { app } from "./fb";
import "./style.css";

const Logueo = (props) => {
  const [isRegistrando, setIsRegistrando] = React.useState(false);

  const crearUsuario = (correo, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("usuario creado:", usuarioFirebase);
        props.setUsuario(usuarioFirebase);
      });
  };

  const iniciarSesion = (correo, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("sesión iniciada con:", usuarioFirebase.user);
        props.setUsuario(usuarioFirebase);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;

    if (isRegistrando) {
      crearUsuario(correo, password);
    }

    if (!isRegistrando) {
      iniciarSesion(correo, password);
    }
  };

  return (
    <div className="container">
      
      <h1> {isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
      <br/><br/>
      <form onSubmit={submitHandler}>
        <label htmlFor="emailField"> Correo </label>
        <input type="email" id="emailField" />
        <label htmlFor="passwordField"> Contraseña </label>
        <input type="password" id="passwordField" />
        <br/><br/>
        <button className="button" type="submit">
          {" "}
          {isRegistrando ? "Regístrate" : "Inicia sesión"}{" "}
        </button>
      </form>
      <br/>
      <button className="button" onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando
          ? "¿Ya tienes cuenta? ¡Inicia sesión"
          : "¿No tienes cuenta? ¡Regístrate gratis!"}
      </button>
    </div>
  );
};

export default Logueo;
