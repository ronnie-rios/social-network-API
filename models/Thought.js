const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true,
        ref: 'User'
    }
   
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

// thoughtSchema.virtual('friendCount').get(function() {
//     return this.friends.length
// });

const User = model('User', thoughtSchema);

module.exports = User;