const { Router } = require('express');
const {
  getAllProducts, getProductById, postProducts, putProducts, deleteProducts,
} = require('../controller/productsController');

const router = Router();
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', postProducts);
router.put('/:id', putProducts);
router.delete('/:id', deleteProducts);

module.exports = router;
