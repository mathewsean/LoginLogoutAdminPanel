const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODBCONNECT)

const express = require("express")
const app = express()
const port = 3001

app.use(function(req, res, next) { 
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
   next();
 });

const userRoute = require('./routes/userRoute') 
app.use('/',userRoute)

const adminRoute = require('./routes/adminRoute')  
app.use('/admin',adminRoute)

app.listen(port,()=>{

  console.log("Server running on " + port); 

})
 