import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navegacion from './components/navegacion'
import Inicio from './components/inicio'
import Productos from './components/productos'
import Usuarios from './components/usuarios'
import Layout from './components/layout';
//import Jumbotron  from './components/jumbotron';


function App() {
  return (
    <Router>
    <Layout>
        <Navegacion />
        <Route exact path="/" component={Inicio} />
        <Route path="/productos" component={Productos} />
        <Route path="/usuarios" component={Usuarios} />
        
    </Layout>
    </Router>
  );
}

export default App;
