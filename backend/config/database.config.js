require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("RES_DB_CONNECT")).catch((err) => console.log("ERR_DB_CONNECT"));
    
process.on('SIGINT', async ()=> {
    await mongoose.connection.close();
    console.log("RES_DB_TERMINATE_SIGINT");
    process.exit(0);
})