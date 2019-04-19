const db = require('../db/connection')
const express = require('express');
const router = express.Router();
const MenuModel = require('../model/menu.model');

    router.get('/menu', (req, res) => {
        MenuModel.find()
        .then(doc => {
            console.log(doc)
            res.json(doc);
            res.status(200);
        })
        .catch(err => res.status(500).json(err))
            
    })
    
    router.get('/menu/:combos_id', (req, res) => {
        MenuModel.findOne({
            combos_id: req.params.combos_id
        })
        .then(doc => {
            res.json(doc);
            res.status(200);
        })
        .catch(err => res.status(500).json(err))

    })

module.exports = router;