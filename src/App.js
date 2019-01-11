import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const trabajador = {
      nombre: "Israel",
      trabajo: "Desarrollador",
      domicilio: "Niños Heroes N 123"
    }
    return (
          <div className="contenedor">
          <h1>Aprendiendo React</h1>
          <p>Nombre {trabajador.nombre}</p>
          <p>Trabajo {trabajador.trabajo}</p>
          <p>Trabajo {trabajador.domicilio}</p>
          </div>
    );
  } 
}

export default App;
