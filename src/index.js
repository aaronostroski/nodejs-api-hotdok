let express = require('express');
let combosRouter = require('./routes/combos');
let app = express();

app.use(combosRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT,  ()=>{
    console.info(`Servidor foi iniciado em ${PORT}`);
})