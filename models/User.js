const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    thoughts: [
        {
            ref: 'Thought'
        }
    ],
    friends: [
        {
            ref: 'User'
        }
    ]   
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

userSchema.virtual('friendCouint').get(function() {
    return this.friends.length
});

const User = model('User', userSchema);

module.exports = User;