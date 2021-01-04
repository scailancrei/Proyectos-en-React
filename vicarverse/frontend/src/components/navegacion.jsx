import React, { Component } from 'react'
import Boton from './boton'
import { Nav, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/navegacion.scss'



/**
 * Clase de Navegacion para todas las paginas
 * Mostrar botones de acceso a usuarios y productos
 */
export default class Navegacion extends Component {
    render() {
        return (
            <Container fluid>
                <Navbar collapseOnSelect expand="md" justify bg="dark" variant="dark">
                    <Link to="/">
                        <Navbar.Brand> Agroverse</Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >

                        <Nav className="ml-auto" > {/* Clase ml-auto para modificar las scss*/}
                            <Nav.Link eventKey={1} >
                                <Link to="/productos">
                                    <Boton text="Acceder" />
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey={2}>
                                <Link to="/usuarios">
                                    <Boton text="Usuarios" />
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Container >
        )
    }
}
