const express = require('express');
const app = express();
const { find, all, create, update, del } = require('./controllers/projectController');

//Rutas
app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('Hello World!');
});

// Projects routes
app.get('/projects', all);
app.post('/projects', create);
app.get('/projects/:id', find);
app.put('/projects/:id', update);
app.delete('/projects/:id', del);


app.use((req, res) => {
  res.send({
    ok: false,
    message: '404',
    description: 'Page not found',
  });
})
  
module.exports = app;