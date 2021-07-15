const { Thought, User } = require('../models');

const thoughtController = {
    //get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err=> {
            console.log(err);
            res.status(400).json(err);
        })
    },

    //create a thought
    createThought({ params, body }, res) {
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                {username: body.username },
                {$push: { thoughts: _id } },
                {new: true}
            );
        }).then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'no user with this id'});
                return
            }
            res.json(dbThoughtData)
        }).catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
    },
    //get a thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'no thought with this id'});
                return;
            }
            res.json(dbThoughtData)
        }).catch(err => {
            console.log(err);
            res.status(400).json(err);
          });

    },
    //update a thought by id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id},
            body,
            { new: true }
        ).then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'no thought with this id'});
                return;
            }
            res.json(dbThoughtData)
        }).catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
    },
    //delete thought by id
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'no thought with this id'});
                return;
            }
            res.json(dbThoughtData)
        }).catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
    },

    //creates a reaction
    createReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true}
            ).then(dbThoughtData => {
                if(!dbThoughtData) {
                    res.status(404).json({ message: 'no thought with this id'});
                    return;
                }
                res.json(dbThoughtData)
            }).catch(err => {
                console.log(err);
                res.status(400).json(err);
              });
    }
    // deletes a reaction
}

module.exports = thoughtController;