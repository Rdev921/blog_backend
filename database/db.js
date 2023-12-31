import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://rishabh:rishabhdev@cluster0.dfzxbru.mongodb.net/socialapp?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;