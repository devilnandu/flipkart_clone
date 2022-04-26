import mongoose from 'mongoose';


const Connection = async (username,password)=> {
    const URL = `mongodb+srv://${username}:${password}@flipkart-clone-cluster.sq22r.mongodb.net/project0?retryWrites=true&w=majority`;

    try{
    await mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true})
    console.log('Database connected succesfully');
    } catch (error){
        console.log('Error: ',error.message);
    }
}

export default Connection;