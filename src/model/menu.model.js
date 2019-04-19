const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema 

const MenuSchema = new Schema([{
    combos_id: String,
    name: String,
    description: String,
    imgPath: String,
    price: Number

}]);

// Model

const Menu = mongoose.model('menu', MenuSchema, 'menu');

module.exports = Menu;

