const express = require('express')
//const cors = require('cors')
const app = express();

app.set('port', process.env.PORT || 4000)



//Middlewares



app.listen(app.get('port'), () => {
    console.log('El puerto es: ', app.get('port'))
})