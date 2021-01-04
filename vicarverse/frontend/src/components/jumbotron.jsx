import React, { Component } from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
import '../styles/jumbotron.scss'


/**
 * Clase jumbotron creado con un container fluid
 * Jumbotron importado desde bootstrap con la clase fluid
 */
export default class jumbotron extends Component {
    render() {
        return (
            <Container fluid>          
                    <Jumbotron fluid>
                        <h1>Bienvenindo a Agroverse</h1>
                    </Jumbotron>
            </Container>
        )
    }
}
