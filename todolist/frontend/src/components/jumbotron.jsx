import React, { Component } from 'react'
import {  Container, Jumbotron } from 'react-bootstrap/'

export default class jumbotron extends Component {
    render() {
        return (
            <Container fluid>          
                    <Jumbotron  fluid>
                        <h1>Hola bienvenido a Agroverse</h1>
                    </Jumbotron>

            </Container>
        )
    }
}
