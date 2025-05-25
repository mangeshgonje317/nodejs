const mongoose= require ('mongoose');

// defining the mongodb connection link

const mongoURL='mongodb://localhost:27017/hotels' 

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

module.exports = db;