const router = require('express').Router();
const {
  getThougt,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtsController.js');

// /api/thoughts
router.route('/').get(getThougt).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  router.route('/thoughtId/reactions')
  .post(createReaction);

  router.route('/thoughtId/reactions/:reactionId')
  .delete(deleteReaction);


module.exports = router;
