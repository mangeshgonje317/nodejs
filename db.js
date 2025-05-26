import mongoose from 'mongoose';
 import dotenv from 'dotenv'
 dotenv.config();
// defining the mongodb connection link

// const mongoURL= process.env.MONGODB_URL_LOCAL 
const mongoURL= process.env.MONGODB_URL;
mongoose.connect(mongoURL);

const db =mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server');
})
db.on('error',(err)=>{
    console.log('Mongodb connection error',err);
})
db.on('disconnected',()=>{
    console.log('disconnected from mongodb server');
})



// export the database connection

export default db;