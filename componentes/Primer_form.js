import { Button, Form, Col, Row, Card, CardBody, CardFooter, FormLabel } from 'react-bootstrap';
import './UsuarioFormulario.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PrimerForm() {

    return (
        <Form>
            <Card className="tabla">
                <CardFooter>
                    <Col>
                    <FormLabel size="lg" className="registro">Registrar Usuario:</FormLabel>
                    </Col>
                </CardFooter>

                <CardBody>
                    <Row>
                        <Col lg={6} sm={12} XL={6} classname= "columna">
                            <FormLabel>Nombre(s): </FormLabel>
                        </Col>
                        <Col lg={6} sm={12} XL={6}>
                            <Form.Control type="text"></Form.Control>
                        </Col>
                    </Row>
                    
                    <Row><br /></Row>

                    <Row>
                        <Col lg={6} sm={12} XL={6}>
                        <FormLabel>Apellido paterno: </FormLabel>
                        </Col>
                        <Col lg={6} sm={12} XL={6}>
                            <Form.Control type="text"></Form.Control>
                        </Col>
                    </Row>

                    <Row><br /></Row>

                    <Row>
                        <Col lg={6} sm={12} XL={6}>
                            <FormLabel>Apellido materno: </FormLabel>
                        </Col>
                        <Col lg={6} sm={12} XL={6}>
                            <Form.Control type="text"></Form.Control>
                        </Col>
                    </Row>

                    <Row><br /></Row>

                    <Row>
                        <Col lg={6} sm={12} XL={6}>
                            <FormLabel>ID de Usuario: </FormLabel>
                        </Col>
                        <Col lg={6} sm={12} XL={6}>
                            <Form.Control type="text"></Form.Control>
                        </Col>
                    </Row>

                    <Row><br /></Row>

                    <Row>
                        <Col lg={6} sm={12} XL={6}>
                            <FormLabel>Contraseña: </FormLabel>
                        </Col>
                        <Col lg={6} sm={12} XL={6}>
                            <Form.Control type="text"></Form.Control>
                        </Col>
                    </Row>

                    <Row><br /></Row>

                    <Row>
                        <Col lg={6} sm={12} XL={6}>
                            <FormLabel>Confirmar Contraseña: </FormLabel>
                        </Col>
                        <Col lg={6} sm={12} XL={6}>
                            <Form.Control type="text"></Form.Control>
                        </Col>
                    </Row>

                </CardBody>

                <CardFooter>
                    <Col>
                        <Button variant="primary">Guardar</Button>
                    </Col>
                </CardFooter>
            </Card>
        </Form>

    )

}

export default PrimerForm;