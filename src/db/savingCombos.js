let Combos = require('../model/combos');
let assert = require('assert');
let insertCombos = require('./connection');

insertCombos = new Combos({
    name: "X-Salada",
    category: "Lanches rapidos",
    deliveryEstimate: "10m",
    imagePath: "../assets/img/xsalada.jpg",
    price: 10.0

    });
            
insertCombos.save()
    .then(doc=> {
    console.log(doc);
     })
    .catch(err =>{
    console.error(err);
     })
