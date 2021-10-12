const getAllUsers = (req, res) => {
  res.send('Request getAllUsers feita');
};

const getUserById = (req, res) => {
  res.send('Request getUserById feita');
};

const postUser = (req, res) => {
  res.send('Request postUser feita');
};

const putUser = (req, res) => {
  res.send('Request putUser feita');
};

const deleteUser = (req, res) => {
  res.send('Request deleteUser feita');
};

module.exports = {
  getAllUsers, getUserById, postUser, putUser, deleteUser,
};
