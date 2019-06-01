import React, { useState } from 'react';
import './App.css';
import EditInPlace from './Editinplace'

function App() {
  const [name, setName] = useState('Letox')
  return (
    <div className="App">
      <EditInPlace value={name} onChangeValue={setName}/>
      <hr />
      Nome: {name}
    </div>
  )
}

export default App;
