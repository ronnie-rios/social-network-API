const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser
} = require('../../controllers/user-controller');

// /users
router.route('/')
    .get(getAllUsers)
    .post(createUser);
    
// /users/:id endpoint
router.route('/:id')
    .get(getUserById);
module.exports = router;