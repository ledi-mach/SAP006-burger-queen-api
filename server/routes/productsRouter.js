const { Router } = require('express');
const {
  getAllProducts, getProductById, postProducts, putProducts, deleteProducts,
} = require('../controller/productsController');

const router = Router();
router.get('/', getAllProducts);
router.get('/:productid', getProductById);
router.post('/', postProducts);
router.put('/:productid', putProducts);
router.delete('/:productid', deleteProducts);

module.exports = router;
