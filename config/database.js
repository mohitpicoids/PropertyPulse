'use server'
import mongoose from "mongoose";

const ConnectDb = async () => {
    mongoose.set('strictQuery', true);

    if (mongoose.connection.readyState >= 1) {
        console.log('Mongodb is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Mongodb is connected');
    }
    catch (error) {
         console.error('MongoDB connection error:', error);
        throw error; // rethrow so calling code knows it failed
    }
}

export default ConnectDb;