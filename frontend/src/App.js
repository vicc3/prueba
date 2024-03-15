import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form.Label>happy halloween</Form.Label>
        <Form.Control></Form.Control>
        <Button variant="primary">press the button if you said hi</Button>{''}
      </header>
    </div>
  );
}

export default App;