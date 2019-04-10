let db = require('../db/connection');

var insertCombos = [

{
    name: "X-Burguer",
    category: "Lanches rapidos",
    deliveryEstimate: "10m",
    imagePath: "assets/img/combos/xsalada.jpg",
},
{
    name: "Pizza",
    category: "Assados no forno",
    deliveryEstimate: "40m",
    imagePath: "assets/img/combos/pizza.jpg",
},
{
    name: "Salada Gourmet",
    category: "Verdes e Fitness",
    deliveryEstimate: "15m",
    imagePath: "assets/img/combos/pratosalada.png",
},
{
    name: "Cachorro Quente",
    category: "Lanches rapidos",
    deliveryEstimate: "12m",
    imagePath: "assets/img/combos/hotdog.png",
}
];

db.collection("combos").insertMany(insertCombos, (error, result)=>{

    if(error) throw new Error(error);
    console.log(result);

});
    
