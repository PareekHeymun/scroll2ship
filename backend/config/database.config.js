require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("MongoDB Connected")).catch((err) => console.log(err));
    
process.on('SIGINT', async ()=> {
    await mongoose.connection.close();
    console.log("App termination: MongoDB disconnected");
    process.exit(0);
})