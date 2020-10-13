import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Modals from './modals/modals.jsx'

import Link from 'next/link'





export default function Navegacion() {


    return (
        <div>
            <Navbar bg="primary" variant="light">
                <Navbar.Brand>
                    <Link href="/">
                        <a>Inicio</a>
                    </Link>
                </Navbar.Brand>

                <Nav class="mr-auto">

                    <Link className="login" href="/login" >
                        <Modals text="Login" />
                    </Link>
                    <Link className="registro" href="/registro">
                        <Modals text="Registro" />
                    </Link>
                </Nav>

            </Navbar>


            <style jsx>{`
            a {
                color: white;
            }
            
            .login {
                font-size: 300px
            }


            `}

            </style>



        </div >
    )


}