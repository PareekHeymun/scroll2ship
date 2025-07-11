const router = require('express').Router();
const productController = require('../controller/products.controller');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getSpecificProduct);
router.post('/uploadProduct', productController.uploadTheProduct);

module.exports = router;

