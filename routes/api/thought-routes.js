const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
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

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(createReaction)

// /api/thoughts/:thoughtId/reactionId
router.route('/:thoughtId/:reactionId')
    .delete(deleteReaction)

module.exports = router;