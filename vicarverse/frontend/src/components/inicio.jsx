import React from 'react'
import Jumbotron from './jumbotron'

export default function Inicio(props) {
    return (
        <div>
            <Jumbotron />
            <h1>{props.text}</h1>
        </div>
    )
}
