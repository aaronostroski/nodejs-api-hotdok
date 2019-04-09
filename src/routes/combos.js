let db = require('../db/connection')
let CombosModel = require('../model/combos.model')
let express = require('express');
let app = express();

const port = 3000;

app.listen(3000, ()=>{
    console.info(`Servidor HTTP escutando na porta ${port}`);
})

app.get('/combos', (req,res)=>{
    CombosModel.find()
        .then(doc => {
            res.json(doc);
            res.status(200);
        })
        .catch(err =>{
            res.status(500).json(err)
        })
        
})

app.get('/combos/:id', (req,res)=>{
    CombosModel.findOne({
        _id: req.params.id
    })
        .then(doc =>{
            res.json(doc);
            res.status(200);
        })
        .catch(err =>{
            res.status(500).json(err)
        })

})