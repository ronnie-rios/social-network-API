const { User } = require('../models');

const userController = {
    //get all users
    getAllUsers(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err=> {
            console.log(err);
            res.status(400).json(err);
        })
    },
    //find by user id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .then(dbUserData => {
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
    //post a user
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err))
    },
    //update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate(
            {_id: params.id },
            body, //add validators?
            {new: true}
        ).then(dbUserData => {
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

    //delete a user
    deleteUser({ params }, res ) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
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

    //post to add a new friend
    addFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true }
            ).then(dbUserData => {
                if(!dbUserData) {
                    res.status(404).json({ message: 'no user with this id'});
                    return
                }
                res.json(dbUserData)
            }).catch(err => {
                console.log(err);
                res.status(400).json(err);
              });
    }
    //delete to remove a friend
};

module.exports = userController;