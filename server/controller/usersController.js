const db = require('../db/models');

const getAllUsers = async (req, res) => {
  const getUsers = await db.Users.findAll();
  try {
    return res.status(200).json(getUsers);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const getUser = await db.Users.findOne({
      where: { id: Number(id) },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });
    if (!getUser) {
      return res.status(200).json({ message: 'User not found' });
    }
    return res.status(200).json(getUser);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const putUser = async (req, res) => {
  const { id } = req.params;
  const updateUser = req.body;
  try {
    await db.Users.update(updateUser, { where: { id: Number(id) } });
    const userUpdated = await db.Users.findOne({
      where: { id: Number(id) },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });
    return res.status(200).json(userUpdated);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postUser = (req, res) => {
  res.send('Request postUser feita');
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await db.Users.destroy({ where: { id: Number(id) } });
    return res.status(200).json({ message: 'usuário deletado!' });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getAllUsers, getUserById, postUser, putUser, deleteUser,
};
