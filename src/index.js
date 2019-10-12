//imports 
const path = require('path');
const express = require('express');
const app = express();

var exec = require('child_process').exec;


//configuración 
app.set('view engine', 'ejs');
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));

//rutas
app.use(require('./routes/index'));

//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.get('/img/automata1.jpg',(req,res) => {
    
   res.sendFile(path.join(__dirname+'/views/img/automata1.jpg'));
  });
//escucha
app.listen(app.get('port'), () => {

    console.log('escuchando en el puerto ', app.get('port'));
});

console.log(path.join(__dirname, '/views/saludo.ejs'));
//imports

app.get('/',(req,res) => {
    res.send('<h1> servidor funciona </h1>')
   // res.render('index',{max: 15});
});

app.get('/hola',(req,res) => {
  res.sendFile(path.join(__dirname+'/views/saludo.ejs'));
});

 app.get('/analizador.html',(req,res) => {
   res.sendFile(path.join(__dirname+'/views/analizador.html'));
 });

 app.get('/archivo.js',(req,res) => {
 res.sendFile(path.join(__dirname+'/views/archivo.js'));
});

app.get('/leer.js',(req,res) => {
 res.sendFile(path.join(__dirname+'/views/leer.js'));
});

app.get('/analizador.js',(req,res) => {
 res.sendFile(path.join(__dirname+'/views/analizador.js'));
});


app.get('/img/automata1.jpg',(req,res) => {
 res.sendFile(path.join(__dirname+'/views/img/automata1.jpg'));
});

