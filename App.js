import logo from './rayo.jpeg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import PrimerForm from './componentes/Primer_form.js';
import Usuarios from './componentes/Usuarios.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // const [personaNombre, setPersona] = useState("Nombre");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
        //          className="App-link"
        //          href="https://reactjs.org"
        //          target="_blank"
        //          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
        {/* <PrimerFormulario personaNombre={personaNombre} /> */}

      </header>
      <br />
      <div className="Forms">
        <PrimerForm />
      </div>

    </div>
  );
}

export default App;