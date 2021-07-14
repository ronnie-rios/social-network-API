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
        }).then(dbUserData => {
            //if no user 404
            if(!dbUserData) {
                res.status(404).json({ message: 'no user with this id'});
                return
            }
            res.json(dbUserData)
        }).catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
    },

    //update a thought by id

    //delete thought by id
    deleteThought({ params, body}, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'no user with this id'});
                return
            }
            res.json(dbThoughtData)
        }).catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
    }
}

module.exports = thoughtController;