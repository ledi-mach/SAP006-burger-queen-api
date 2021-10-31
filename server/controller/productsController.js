const db = require('../db/models');

const getAllProducts = async (req, res) => {
  const getProducts = await db.Products.findAll();

  try {
    if (getProducts.length === 0) {
      res.status(404).json({ message: 'No products found.' });
    }
    return res.status(200).json(getProducts);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const getOneProduct = await db.Products.findOne({
      where: { id: Number(id) },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (!getOneProduct) {
      return res.status(200).json({ message: 'Product not found.' });
    }
    return res.status(200).json(getOneProduct);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postProducts = (req, res) => {
  res.send('Request getProductById feita');
};

const putProducts = (req, res) => {
  res.send('Request putProduct sendo feita');
};

const deleteProducts = (req, res) => {
  res.send('Request deleteProduct sendo feita');
};

module.exports = {
  getAllProducts, getProductById, postProducts, putProducts, deleteProducts,
};
