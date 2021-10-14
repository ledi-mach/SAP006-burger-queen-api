const getAllOrders = (req, res) => {
  res.send('Request getAllOlders feita');
};
const getOrderById = (req, res) => {
  res.send('Request getOrdersById feita');
};
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
