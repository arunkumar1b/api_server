const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.connect(`mongodb+srv://<${process.env.DB_USER}>:${process.env.DB_PW}@cluster0.s11qz.mongodb.net/chatAppMern?retryWrites=true&w=majority`, ()=> {
//   console.log('connected to mongodb')
// })
// mongoose.connect(`mongodb+srv://arunkumara1b:aruN%409442@cluster0.qaumpie.mongodb.net/chatAppMern?retryWrites=true&w=majority`, ()=> {
//   console.log('connected to mongodb')
  
// })
mongoose.set('strictQuery', true);
mongoose.connect(`mongodb://localhost:27017/chatAppMern`, ()=> {
  console.log('connected to mongodb')
})
