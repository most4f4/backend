// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = function() {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => {
        console.error(err.message);
        process.exit(1);
    });
};

module.exports = connectDB;

