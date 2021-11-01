const db = require('../db/models');

const { Products, ProductsOrders } = db;

const getAllOrders = async (req, res) => {
  const getOrders = await db.Orders.findAll({
    include: {
      model: Products,
      as: 'products',
      attributes: ['id', 'name', 'flavor', 'complement', 'image', 'type', 'sub_type', 'price'],
      through: {
        model: ProductsOrders,
        as: 'qtd',
        attributes: ['qtd'],
      },
    },
  });
  try {
    if (getOrders.length === 0) {
      return res.status(200).json({
        code: 200,
        message: 'No orders at the moment.',
      });
    }
    return res.status(200).json(getOrders);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const getOrderById = async (req, res) => {
  const { id } = req.params;

  const getOrder = await db.Orders.findOne({
    where: { id: Number(id) },
    include: {
      model: Products,
      as: 'products',
      attributes: ['id', 'name', 'flavor', 'complement', 'image', 'type', 'sub_type', 'price'],
      through: {
        model: ProductsOrders,
        as: 'qtd',
        attributes: ['qtd'],
      },
    },
  });

  try {
    if (!getOrder) {
      return res.status(200).json({
        code: 200,
        message: 'Order not found.',
      });
    }
    return res.status(200).json(getOrder);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

/* const getAllOrders = (req, res) => {
  res.send('Request getAllOlders feita');
};

const getOrderById = (req, res) => {
  res.send('Request getOrdersById feita');
}; */

const postOrder = (req, res) => {
  res.send('Request postOrder feita');
};

const putOrder = (req, res) => {
  res.send('Request putOrder feita');
};

const deleteOrder = (req, res) => {
  res.send('Request deleteOrder feita');
};

module.exports = {
  getAllOrders, getOrderById, postOrder, putOrder, deleteOrder,
};
