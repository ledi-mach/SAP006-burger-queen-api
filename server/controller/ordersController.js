const getAllOrders = (req, res) => {
console.log('pegando todas as orders');
  res.send('Request getAllOlders feita');
};
const getOrderById = (req, res) => {
console.log('pegando order por id');
  res.send('Request getOrdersById feita');
};
const postOrder = (req, res) => {
  console.log('postOrder');
  res.send('Request postOrder feita');
};

const putOrder = (req, res) => {
  console.log('putOrder');
  res.send('Request putOrder feita');
};

const deleteOrder = (req, res) => {
  console.log('deletar order');
  res.send('Request deleteOrder feita');
};

module.exports = {
  getAllOrders, getOrderById, postOrder, putOrder, deleteOrder,
};
