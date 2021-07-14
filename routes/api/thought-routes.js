const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    deleteThought
} = require('../../controllers/thought-controller');

// /thoughts
router.route('/')
    .get(getAllThoughts)
    .post(createThought)

 // /thoughts/:thoughtId
 router.route('/:id')
    .delete(deleteThought)
module.exports = router;