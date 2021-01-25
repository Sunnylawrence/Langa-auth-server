// const mongodb=require('mongodb');
// const { getMaxListeners } = require('./src/model/user');
// const MongoClient = mongodb.MongoClient
// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager-app'
// MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error, client)=>{
//     if(error){
// console.log('database connection failed')
//     }
//     console.log('connection successful')
//     const db = client.db(databaseName)
//     db.collection('users').insertOne({
//         name : 'sunny',
//         age : 31,
//         email : 'sunny@gmail.com',
//         password : 'adsadas534564'

//     })
// })