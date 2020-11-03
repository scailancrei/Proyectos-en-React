import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function Boton(props) {

    const text = props.text;

    //const [id, setId] = useState(0);

    const [show, setShow] = useState(false);

    return (
        <div className="col-sm-12">
            <Button variant="primary" onClick={() => setShow(true)}>{text}</Button>

            <Modal
                size="md"
                backdrop="static"
                show={show}
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Inicio de sesion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="/users" method="post">
                        <span>Email</span>
                        <input required type="email" name="email" id="email" placeholder="Introduce email" />
                        <span>Contraseña</span>
                        <input type="password" placeholder="Introduce contraseña" name="password" id="password"></input>
                    </form>
                </Modal.Body>
            </Modal>
        </div>

    )
}
