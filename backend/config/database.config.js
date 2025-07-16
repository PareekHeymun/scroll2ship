require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI).
    then(() => console.log("Database connected")).
    catch((err) => console.log("Error connecting to database", err));
    
process.on('SIGINT', async ()=> {
    await mongoose.connection.close();
    console.log("Terminated program");
    process.exit(0);
})