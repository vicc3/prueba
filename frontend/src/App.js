import logo from './rayo.jpeg';
import './App.css';
import { Button, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className = "App-link"
          href = "https://reactjs.org"
          target = "_blank"
          rel = "noopener noreferrer"
        >
        </a>
        <Form.Label>kuchaw</Form.Label>
        <Form.Control type = "text"></Form.Control>
        <Button variant="primary">press the button if you said hi</Button>{''}
      </header>
    </div>
  );
}

export default App;