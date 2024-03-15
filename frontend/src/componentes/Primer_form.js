import { Col, Row, Form, Button} from 'react-bootstrap';
function Primer_forms (carroNombre) {
    function click() {
         console.log(carroNombre);
    }
    return(
    <Row>
        <Col>
            <Form.Label>¿Qué nombre tiene su carro?</Form.Label>
        </Col>
        <Col>
            <Form.Control type = "text" value = {carroNombre.carroNombre}></Form.Control>
        </Col>
        <Col>
            <Button variant="primary" onClick={click()}> kuchau</Button>{''}
        </Col>
    </Row>
    );
}
export default Primer_forms;