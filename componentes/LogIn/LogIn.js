import { Button, Form, Col, Row } from 'react-bootstrap';

function LogIn(personaNombre){

    function Click(){
        console.log(personaNombre);
    }
    return (
        <Row>
            <Col>
                <Form.Label>Peronaje favorito de cars:</Form.Label>
            </Col>
            <Col>
                <Form.Control type='text' value={personaNombre.personaNombre}></Form.Control>
            </Col>
            <Col>
                <Button variant="primary" onClick={Click()}>Primary</Button>{''}
            </Col>
        </Row>
    )
}

export default PrimerForm;