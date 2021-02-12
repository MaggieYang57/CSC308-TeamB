const env = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
env.config();
const Hikes  = require('./trails-schema.js')
app.use(bodyParser.json())

const uri = process.env.DB_LINK;
if (!uri) {
   console.log("No DB_LINK environment variable found, please provide one.")
   exit(1)
}
mongoose.connect(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true
})
.then(() => {
   console.log('Atlas Connected..')
})
.catch(err => console.log(err));



const getAllHikes = async () => {
  return Hikes.find({})
}

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.get('/api/hike', async (req, res) => {
  res.status(200)  
  let hike = await getAllHikes()
  res.send(hike)
} )

app.listen(3001);
