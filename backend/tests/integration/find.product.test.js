const Product = require('../../models/product.model');
require('dotenv').config();
(
    async function(){
        try{
            const product_id_secret = process.env.PRODUCT_ID_TEST;
            const status_found = await Product.findById(product_id_secret);
            if(status_found){
                console.log('FOUND!');
                console.log(status_found);
            }
            else{
                console.log('NOT FOUND');
                console.log(status_found);
            }
        }
        catch(err){
            console.log(err.message);
        }
    }
)();