/* eslint-disable camelcase */
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
      return res.status(200).json({ message: 'No orders at the moment.' });
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
      return res.status(200).json({ message: 'Order not found.' });
    }
    return res.status(200).json(getOrder);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const postOrder = async (req, res) => {
  const requestProducts = req.body.Products;
  const {
    client_name, table, status, user_id, processedAt,
  } = req.body;

  try {
    const creatingNewOrder = await db.Orders.create({
      client_name, user_id, table, status, processedAt,
    })
      .then((result) => {
        requestProducts.map((item) => {
          const findProduct = Products.findByPk(item.id);
          if (!findProduct) {
            return res.status(400).json({ message: 'Product not found.' });
          }

          const ordersItems = {
            order_id: result.id,
            product_id: item.id,
            qtd: item.qtd,
          };

          db.ProductsOrders.create(ordersItems);
          return res.status(200).json(result);
        });
      });

    return res.status(200).json(creatingNewOrder);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

const putOrder = async (req, res) => {
  const { id } = req.params;
  const updateOrder = req.body;
  try {
    await db.Orders.update(updateOrder, { where: { id: Number(id) } });
    const orderUpdated = await db.Orders.findOne({
      where: { id: Number(id) },
    });
    return res.status(200).json(orderUpdated);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await db.Orders.destroy({ where: { id: Number(id) } });
    return res.status(200).json({ message: 'Order deleted' });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAllOrders, getOrderById, postOrder, putOrder, deleteOrder,
};
