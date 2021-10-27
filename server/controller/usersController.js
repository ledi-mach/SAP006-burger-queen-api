const db = require('../db/models');

 const getAllUsers = async (req, res) => {
  const getUsers = await db.Users.findAll();
  try {
    return res.status(200).json(getUsers);
  } catch (error) {
    return res.status(400).json(error);
  }
}; 

// const getAllUsers = (req, res) => {
   //res.send('Request getAllUsersFeita');
//};

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
