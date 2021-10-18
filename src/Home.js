import React from "react";
import { app } from "./fb";

const Home = () => {
  const cerrarSesion = () => {
    app.auth().signOut();
  };

  return (
    <div className="container">
      <h1>Bienvenido a Medstudio.</h1>
      <h4>sesión iniciada</h4>
      <br/><br/>
      <button className="button out" onClick={cerrarSesion}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
