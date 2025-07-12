const router = require('express').Router();
const { body, param } = require('express-validator');
const productController = require('../controller/products.controller');

router.get('/', productController.getAllProducts);
router.get('/:id', param('id').isMongoId().withMessage('ERR_INVALID_ID'), productController.getSpecificProduct);
router.post('/uploadProduct',
  [
    body('name').trim().escape(),
    body('price').isNumeric(),
    body('description').trim().escape()
  ],
  productController.uploadTheProduct
);

module.exports = router;

