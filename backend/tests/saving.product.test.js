const Product = require('../models/product.model');

(
    async function(){
        //wrapping within the try catch block will help to identify the errors in the async block
        try{
         const output = await new Product({
            name: 'JSBOOK',
            price: 50,
            category: 'books'
        }).save()
            console.log(output);
        
        }catch(err){
            console.log(err);
        }
    }
)();


