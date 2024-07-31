const mongoose = require('mongoose');
const mondbUrl = "mongodb+srv://sthaanisha16:g8DJjyBbT4tqZKag@cluster0.fogvnl3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDb = () => {
    return mongoose.connect(mondbUrl);
}
module.exports = { connectDb }