const { Router } = require('express');
const {
  getAllOrders, getOrderById, postOrder, putOrder, deleteOrder,
} = require('../controller/ordersController');

const router = Router();
router.get('/', getAllOrders);
router.get('/:orderid', getOrderById);
router.post('/', postOrder);
router.put('/:orderid', putOrder);
router.delete('/:orderid', deleteOrder);

module.exports = router;
