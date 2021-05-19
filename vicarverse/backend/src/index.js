
const express = require('express')
const axios = require('axios')
const cors = require('cors');

const app = express();


app.set('port', process.env.PORT || 4000)

//Middlewares
app.use(express.json());
app.use(cors());


app.use(express.static('./src'))


//routes

/**
 * Petición de datos al servidor de la API 
 * @param req contiene la petición del cliente
 * @param res contiene la respuesta del servidor y que es mandada al cliente.
 * @returns devuelve una respuesta asíncrona desde el servidor de la Api y que se encarga de redirigir dicha respuesta al cliente
 */
app.post('/api/index.php', async function (req, res) { 
    
    const usuario = req.body.usuario
    const contraseña = req.body.contraseña
    try {
        return await axios
            .post('http://www.vicarverse.com/api/index.php', {
                usuario: usuario,
                contraseña: contraseña
            })
            .then((response) => {    
                const { data } = response
                if (data) {
                
                    console.log(data.usuario)
                    res.json(data)
                } else {
                    res.send(console.log('no hay respuesta'))
                }
            })

    } catch (e) {
        console.log(e.stack)
        res.status(500).send({ error: e.message })
    }


})


/**
 * Petición de datos al servidor de la API 
 * @param req contiene la petición del cliente
 * @param res contiene la respuesta del servidor y que es mandada al cliente.
 * @returns devuelve una respuesta asíncrona desde el servidor de la Api y que se encarga de redirigir dicha respuesta al cliente
 */
app.post('/api/rutas/nuevoUser.php', async function (req, res) { //cuando se accede a la ruta api/index.php recogemos los datos del usuario
    

    // Obtenemos los campos usuario, contraseña e email del body que serán usadas para enviar como petición a la API
    const usuario = req.body.usuario
    const contraseña = req.body.contraseña
    const email = req.body.email
    try {
        //Devuelve una respuesta asíncrona
        return await axios({
            method: 'POST',
            url: 'http://www.vicarverse.com/api/rutas/nuevoUser.php',
            data: {
                usuario: usuario,
                email: email,
                contraseña: contraseña
                
            },
            headers: {
                'Content-type': 'application/json'
            }
        })
            //Si se recibe respuesta desde la API...
            .then((response) => {    
                const { data } = response
                if (data) {
                
                    console.log(data)
                    res.send(data)
                } else {    //Si no se recibe la respuesta
                    res.send(console.log('no hay respuesta'))
                }
            })

    } catch (e) {
        console.log(e.stack)
        res.status(500).send({ error: e.message })
    }

})

//Servidor iniciado
app.listen(app.get('port'), () => {
    console.log('El puerto es: ', app.get('port'))
    
})