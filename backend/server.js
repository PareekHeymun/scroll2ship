require('dotenv').config();
const authRoutes = require('./routes/auth.js');

const productRoutes = require('./routes/products.js');

const PORT = process.env.PORT || 3000;

require('./config/database.config.js');

const userCollection = require('./models/user.model.js');

const errhandler = require('./middleware/errhandler.middleware.js');

const express = require('express');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.use('/api/products', productRoutes);

app.use(errhandler);        //errhandler must be the last middleware because express handles middlewares in order



//Tests
//require('./tests/integration/saving.product.test.js');
//require('./tests/integration/find.product.test.js');


app.listen(PORT, ()=>{
    console.log(`Server started at PORT: ${PORT}`);
});