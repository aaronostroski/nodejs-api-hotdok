const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema 

const CombosSchema = new Schema({
    name: String,
    category: String,
    deliveryEstimate: String,
    imagePath: String,
    price: Number 

})

// Model

const Combos = mongoose.model('combos', CombosSchema);

module.exports = Combos;

