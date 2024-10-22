const mongoose = require('mongoose');

// Define the BusinessAndService Schema
const BusinessAndServiceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'services'
    },
    images: {
        type: String
    },
    open: {
        type: Boolean,
        default: true
    },
    phone: {
        type: String
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    },
    whatsapp: {
        type: String
    },
    Features: {
        type: String
    },
    // Create a reference to the User schema to establish a relationship
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Refers to the User model
        required: true
    }
});

// Create the model for the BusinessAndService collection
const BusinessAndService = mongoose.model('BusinessAndService', BusinessAndServiceSchema);

module.exports = BusinessAndService;
