import React, { useState } from "react";
import "./App.css";
import EditInPlace from "./Editinplace";

function App() {
  const [pais, setPais] = useState("Brasil");
  const [estado, setEstado] = useState("Maranhão");
  return (
    <div className="App">
      <EditInPlace value={pais} onChangeValue={setPais} field="Pais" />
      <EditInPlace value={estado} onChangeValue={setEstado} field="Estado" />
      <hr />
      <span className="show-text">País: {pais}</span> <br />
      <span className="show-text">Estado: {estado}</span>
    </div>
  );
}

export default App;
