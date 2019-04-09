let db = require('../db/connection')
let CombosModel = require('../model/combos.model')
let express = require('express');
let router = express.Router();

    router.get('/combos', (req,res)=>{
        CombosModel.find()
            .then(doc => {
                res.json(doc);
                res.status(200);
            })
            .catch(err =>{
                res.status(500).json(err)
            })
            
    })

    router.get('/combos/:id', (req,res)=>{
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

module.exports = router;