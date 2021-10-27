const { Router } = require('express');
const OrderRouter = require('./orderRouter');
const ProductsRouter = require('./productsRouter');
const UsersRouter = require('./usersRouter');

const router = Router();

// aqui vai todas as rotas
router.use('/orders', OrderRouter);
router.use('/products', ProductsRouter);
router.use('/users', UsersRouter);

module.exports = router;
