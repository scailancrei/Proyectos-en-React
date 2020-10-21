import React, { Component, useState } from 'react'
import { Button } from 'react-bootstrap'

export default class Boton extends Component {

   handleLogin = (e) => {
       this.
   }


    render() {
        const [show, setShow] = useState(0);

        return (
            <div>
                <Button onClick={this.handleLogin} variant="primary">Primary</Button>
            </div>
        )
    }
}
