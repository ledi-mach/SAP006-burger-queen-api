const { Router } = require('express');
const {
  getAllUsers, getUserById, postUser, putUser, deleteUser,
} = require('../controller/usersController');

const router = Router();
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);

module.exports = router;
