const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// /thoughts
router.route('/')
    .get(getAllThoughts)
    .post(createThought)

 // /thoughts/:thoughtId
 router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)
module.exports = router;