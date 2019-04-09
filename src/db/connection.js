const mongoose = require('mongoose');

const server = "localhost:27017";
const database = "hotdok";

mongoose.connect(`mongodb://${server}/${database}`);

module.exports = mongoose.connection.once('open', ()=>{
    console.log("Conexão estabelicida com sucesso ao MongoDB")

}).on('error', (error)=>{
    console.log(`Erro de conexão ao MongoDB ${error}`)
});
