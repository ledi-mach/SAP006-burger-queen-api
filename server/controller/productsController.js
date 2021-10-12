const getAllProducts = (req, res) => {
  console.log('pegando todos os produtos');
  res.send('Request getAllProducts feita');
};

const getProductById = (req, res) => {
  console.log('pegando os produtos por id');
  res.send('Request getProductsById feita');
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
