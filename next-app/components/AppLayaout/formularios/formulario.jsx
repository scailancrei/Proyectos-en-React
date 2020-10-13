//import 'bootswatch/dist/yeti/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Input from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'


export default function Formulario() {
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Introduce email" required />
                    <Form.Text className="text-muted">
                        Nunca compartiremos tus datos.
                    </Form.Text>
                    
                </Form.Group>

            </Form>
        </div>

    )
}

