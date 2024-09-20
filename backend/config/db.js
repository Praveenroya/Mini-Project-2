const { MONGO_URI } = require('../env/env')
const mongoose = require('mongoose'); // npm install mongoose

const connectToDatabase = () => {
    // Connect to MongoDB
    mongoose.connect(MONGO_URI, {});

    // Event listeners for MongoDB connection
    mongoose.connection.on('connected', () => {
        console.log("Connected to MongoDB successfully");
    })
}

module.exports = {
    connectToDatabase
}