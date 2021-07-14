const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// /users
router.route('/')
    .get(getAllUsers)
    .post(createUser);

// /users/:id endpoint
router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)
module.exports = router;