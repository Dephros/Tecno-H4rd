const mongoose = require('mongoose');

const conexionDB = async () =>
{
try {

    const DB = await mongoose.connect('mongodb://localhost:27017/tecno');
    console.log("Conexión satisfactoria", DB.connection.name)

} catch (error) {

console.log(error);

    }   
}

module.exports = conexionDB;



