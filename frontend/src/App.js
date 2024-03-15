import logo from './rayo.jpeg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import Primer_forms from './componentes/Primer_form';
import { useState } from 'react';

function App() {
  const [ carroNombre, setCarro ] = useState("Nombre");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a></a>
        <Primer_forms carroNombre = {carroNombre}/>
      </header>
    </div>
  );
}

export default App;