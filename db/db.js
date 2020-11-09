const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/restaurantlist'


mongoose.connect( process.env.MONGODB_URI || connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
  console.log('connected');
  console.log(`mongoose connected to ${connectionString}`)
})

mongoose.connection.on('error', (err) =>{
  console.log('err', err);
  console.log(`mongoose error `, err)
})

mongoose.connection.on('disconnected', () =>{
  console.log('disconnected');
  console.log(`mongoose disconnected from ${connectionString}`)
})
