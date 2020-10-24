import React, { Component } from 'react'
import Boton from './boton'
import 'react-bootstrap'





export default class Nvegacion extends Component {
    render() {
        return (
            <div>
                <Boton text="registro"/>
                <Boton text="acceder"/>
            </div>
        )
    }
}
