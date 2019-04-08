const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hotdok');

module.exports = mongoose.connection.once('open', ()=>{
    console.log("Conexão estabelicida com sucesso ao MongoDB")

}).on('error', (error)=>{
    console.log(`Erro de conexão ao MongoDB ${error}`)
});
