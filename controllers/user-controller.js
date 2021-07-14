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
            //if no pizza 404
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
    }
};

module.exports = userController;