const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is correctly imported and configured

const mongoURI = process.env.MONGO_URI; // Ensure mongoURI is defined

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected");

        // Fetch data from the "food_items" collection
        const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
        global.food_items = fetchedData;

        // Fetch data from the "foodCategory" collection
        const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
        global.foodCategory = foodCategory;

        // Uncomment if you need to log the fetched data for debugging
        // console.log(global.food_items);
        // console.log(global.foodCategory);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongoDB;
