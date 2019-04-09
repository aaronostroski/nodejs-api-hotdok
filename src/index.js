let express = require('express');
let consign = require('consign');
let app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.info(`Servidor foi iniciado em ${PORT}`);
})