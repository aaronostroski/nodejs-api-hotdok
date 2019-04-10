let Menu = require('../model/menu.model');
let db = require('../db/connection');

var insertMenu = [

{   // x-Salada
    combos_id: "5cad3e3826017144f0d11025",
    name: "X-Salada Tradicional",
    description: "X-Salada tradicional com hamburger, queijo, alface e tomate.",
    imagePath: "assets/img/combos/xsalada.jpg",
    price: 10.0
},
{
    combos_id:"5cad3e3826017144f0d11025",
    name: "X-Egg",
    description: "X-Egg com hamburger, ovos, queijo, alface e tomate.",
    imagePath: "assets/img/combos/pizza.jpg",
    price: 11.0
},
{
    combos_id:"5cad3e3826017144f0d11025",
    name: "X-Bacon",
    description: "X-Bacon com hamburger, bacon, queijo, alface e tomate.",
    imagePath: "assets/img/combos/pratosalada.png",
    price: 14.0
},
{
    combos_id:"5cad3e3826017144f0d11025",
    name: "X-Frango",
    description: "X-Frango com hamburger, frango, queijo, alface e tomate.",
    imagePath: "assets/img/combos/pratosalada.png",
    price: 15.0
},
{   //Pizzas
    combos_id: "5cad3e3826017144f0d11026",
    name: "Pizza de Alho e Óleo",
    description: "Contém muzzarela, alho douradono e Parmesão.",
    imagePath: "assets/img/menu/pizza_alhoeoleo.jpg",
    price: 42.0
},
{   
    combos_id:"5cad3e3826017144f0d11026",
    name: "Pizza Bela Itália",
    description: "Contém muzzarela, escarola, palmito e catupiry.",
    imagePath: "assets/img/menu/pizza_italia.jpg",
    price: 45.0
},
{
    combos_id:"5cad3e3826017144f0d11026",
    name: "Pizza de Calabresa",
    description: "Contém muzzarela, calabresa e cebola.",
    imagePath: "assets/img/combos/pizza.jpg",
    price: 50.0
},
{
    combos_id:"5cad3e3826017144f0d11026",
    name: "Pizza 5 queijos",
    description: "Contém muzzarela, provolone, catupiry, parmesão e gorgonzola.",
    imagePath: "assets/img/menu/pizza_5queijos.png",
    price: 52.0
},
{   //Saladas gourmet
    combos_id: "5cad3e3826017144f0d11027",
    name: "Salada de grão de bico",
    description: "Contém cenoura, azeitonas, tempero verde, sopa de mostorda e grão de bico.",
    imagePath: "assets/img/menu/salada_graoebico.jpg",
    price: 14.0
},
{   
    combos_id:"5cad3e3826017144f0d11027",
    name: "Salada de tomate cereja",
    description: "Contém salsicha, suco de limão, azeite de oliva e tomate cereja.",
    imagePath: "assets/img/menu/salada_tomate.jpg",
    price: 16.0
},
{
    combos_id:"5cad3e3826017144f0d11027",
    name: "Salada de repolho e uvas passas",
    description: "Contém repolho, uva passa, azeite de oliva e alface.",
    imagePath: "assets/img/menu/salada_repolho.png",
    price: 17.0
},
{
    combos_id:"5cad3e3826017144f0d11027",
    name: "Salada verde com frutas, mostarda e mel",
    description: "Contém alface, ruculá, abacaxi, sopa de mostarda e mel.",
    imagePath: "assets/img/combos/salada_verde_frutas.png",
    price: 20.0
},
{   //Cachorros quentes
    combos_id: "5cad3e3826017144f0d11028",
    name: "Cancho Quente Tradicional",
    description: "Contém 2 salsichas, ovo de codorna, alface e batata palha.",
    imagePath: "assets/img/menu/cachorroquente_tradicional.jpg",
    price: 21.0
},
{   
    combos_id:"5cad3e3826017144f0d11028",
    name: "Cachorro Quente Prensado",
    description: "Presado com 3 salsichas, ovo de codorna, alface e batata palha.",
    imagePath: "assets/img/menu/cachorroquente_prensado.jpg",
    price: 24.0
},
{
    combos_id:"5cad3e3826017144f0d11028",
    name: "Cachorro Quente Americano",
    description: "Contém salsicha, molho especial, queijo e batata palha.",
    imagePath: "assets/img/combos/hotdog.png",
    price: 25.0
},
{
    combos_id:"5cad3e3826017144f0d11028",
    name: "Cachorro Quente Bacon",
    description: "Contém bacon em cubos, salsicha, queijo e batata palha.",
    imagePath: "assets/img/menu/cachorroquente_bacon.png",
    price: 26.0
}
];

db.collection("menu").insertMany(insertMenu, (error, result)=>{

    if(error) throw new Error(error);
    console.log(result);

});
    
