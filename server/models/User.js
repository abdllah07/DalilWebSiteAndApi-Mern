const mongoose = require('mongoose');

// Define the User Schema
const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profileImage: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
    followers: {
        type: Number,
        default: 0
    },
    following: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        default: 'user'
    },
    // Add a relationship to the BusinessAndService model
    businesses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BusinessAndService'
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
