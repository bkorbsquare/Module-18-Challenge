const router = require('express').Router();

// From controllers\thoughtController.js:
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// Api/thoughts
router.route('/').get(getThought).post(createThought);

// Api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// Api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(createReaction);

// Api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;