import React, { useState } from "react";
import "./App.css";
import EditInPlace from "./components/Editinplace";
import Spancustom from "./components/span-custom";

function App() {
  const [pais, setPais] = useState("Brasil");
  const [estado, setEstado] = useState("Maranhão");
  return (
    <div className="App">
      <EditInPlace value={pais} onChangeValue={setPais} field="Pais" />
      <EditInPlace value={estado} onChangeValue={setEstado} field="Estado" />
      <hr />
      <Spancustom>País: {pais}</Spancustom><br/>
      <Spancustom>Estado: {estado}</Spancustom>
    </div>
  );
}

export default App;
