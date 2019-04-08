let express = require('express');
let consign = require('consign');

let app = express();

const port = 3000;

app.listen(3000, ()=>{
    console.info(`Servidor HTTP escutando na porta ${port}`);
})