const app = require('./server');
const http = require('http').createServer(app);
const mongoose = require('mongoose')

const conectionString = 'mongodb+srv://taller_user:ydgee0e3AeMPsBl3@cluster0.9wx4x.mongodb.net/fastifyTads';

const PORT = 3000;

http.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
})

mongoose.connect(conectionString,{})
    .then(()=> console.log('Conectado a mongo'))
    .catch((e)=> console.log('Error de conexion:'+e))
