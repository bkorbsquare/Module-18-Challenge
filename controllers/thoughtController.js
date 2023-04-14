const { User, Thought } = require("../models");

module.exports = {

  // Get thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  // Get one thought
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No Thoughts with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create thought
  createThought(req, res) {
    Thought.create(req.body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No Users with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },


  // Update thought
  changeThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, New: true })
      .then((thought) => 
        !thought
         ? res.status(404).json({ message: "No thoughts with that ID" })
        : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },


  // Delete thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No thoughts with that ID" })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'Thought deleted, but no user with this ID'})
          : res.json({ message: 'Thought deleted' })
      )
      .catch((err) => res.status(500).json(err));
  },


  // Add reaction
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thoughts with this ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

// Remove reaction
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thoughts with this ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};