require('dotenv').config();
const authRoutes = require('./routes/auth.js');
const productRoutes = require('./routes/products.js');
const cartRoutes = require('./routes/cart.js');
const orderRoutes = require('./routes/order.js');
const wishlistRoutes = require('./routes/wishlist.js');
const userRatingRoutes = require('./routes/userRating.js');

const PORT = process.env.PORT || 4000;

require('./config/database.config.js');

const userCollection = require('./models/user.model.js');

const errhandler = require('./middleware/errhandler.middleware.js');

const express = require('express');
const rateLimit = require('./middleware/rateLimit.middleware.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(rateLimit); // Apply rate limiting to all requests
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/userRating', userRatingRoutes);

app.use(errhandler);        //errhandler must be the last middleware because express handles middlewares in order

//Tests
//require('./tests/integration/saving.product.test.js');
//require('./tests/integration/find.product.test.js');

app.listen(PORT, ()=>{
    console.log(`Server started at PORT: ${PORT}`);
});