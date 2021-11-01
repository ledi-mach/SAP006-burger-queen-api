const { Router } = require('express');
const {
  getAllOrders, getOrderById, postOrder, putOrder, deleteOrder,
} = require('../controller/ordersController');

const router = Router();
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.post('/', postOrder);
router.put('/:id', putOrder);
router.delete('/:id', deleteOrder);

module.exports = router;
