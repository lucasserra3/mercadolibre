const mongoose = require('mongoose');

const user="lucas";
const password="todoslosdiaslomismo";
const dbname = "equipos";
const cluster = "cluster0.dknrj";
const uri=`mongodb+srv://${user}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log("base de datos conectada"))
.catch(e=> console.error(e))
 
module.exports = mongoose;

