require('dotenv').config();
const authRoutes = require('./routes/auth.js');
const productRoutes = require('./routes/products.js');

const PORT = process.env.PORT || 3000;
const database = require('./config/database.config.js');
const userCollection = require('./models/user.model.js');

const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);


//Tests
//require('./tests/integration/saving.product.test.js');
//require('./tests/integration/find.product.test.js');
// async function main() {
//     const user_2 = new userCollection({
//         name: 'Mithul',
//         email: 'M@example.com',
//         password: '456'
//     });
//     try {
//         const result = await user_2.save();
//         console.log('User 1 Saved Successfully', result);
//     } catch (err) {
//         console.log('Error Saving User 2', err.message);
//     }
// }

// main();

app.listen(PORT, ()=>{
    console.log(`Server started at PORT: ${PORT}`);
});