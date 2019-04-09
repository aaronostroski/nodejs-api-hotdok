let Combos = require('../model/combos.model');
let db = require('../db/connection');

var insertCombos = [

{
    name: "X-Salada",
    category: "Lanches rapidos",
    deliveryEstimate: "10m",
    imagePath: "assets/img/combos/xsalada.jpg",
    price: 10.0
},
{
    name: "Pizza",
    category: "Assados no forno",
    deliveryEstimate: "40m",
    imagePath: "assets/img/combos/pizza.jpg",
    price: 50.0
},
{
    name: "Salada Gourmet",
    category: "Verdes e Fitness",
    deliveryEstimate: "15m",
    imagePath: "assets/img/combos/pratosalada.png",
    price: 12.0
},
{
    name: "Cachorro Quente",
    category: "Lanches rapidos",
    deliveryEstimate: "12m",
    imagePath: "assets/img/combos/hotdog.png",
    price: 15.0
}
];

db.collection("combos").insertMany(insertCombos, (error, result)=>{

    if(error) throw new Error(error);
    console.log(result);

});
    
