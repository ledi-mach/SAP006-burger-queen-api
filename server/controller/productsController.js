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
    const getProduct = await db.Products.findOne({
      where: { id: Number(id) },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (!getProduct) {
      return res.status(200).json({ message: 'Product not found.' });
    }
    return res.status(200).json(getProduct);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postProducts = async (req, res) => {
  const {
    // eslint-disable-next-line camelcase
    name, price, flavor, complement, image, type, sub_type,
  } = req.body;

  try {
    const newProduct = await db.Products.create({
      name, price, flavor, complement, image, type, sub_type,
    });

    const newProductReturned = await db.Products.findOne({
      where: { id: newProduct.id },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    return res.status(200).json(newProductReturned);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const putProducts = async (req, res) => {
  const { id } = req.params;
  const updateProduct = req.body;
  try {
    await db.Users.update(updateProduct, { where: { id: Number(id) } });
    const productUpdated = await db.Products.findOne({
      where: { id: Number(id) },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });
    return res.status(200).json(productUpdated);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteProducts = async (req, res) => {
  const { id } = req.params;
  try {
    await db.Products.destroy({ where: { id: Number(id) } });
    return res.status(200).json({ message: 'Produto deletado!' });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getAllProducts, getProductById, postProducts, putProducts, deleteProducts,
};
