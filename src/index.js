const express = require('express');
const app = express();
const combosRouter = require('./routes/combos');
const menuRouter = require('./routes/menu');

app.use(combosRouter);
app.use(menuRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT,  ()=>{
    console.info(`Servidor foi iniciado na porta: ${PORT}.`);
})