const env = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
env.config();
app.use(bodyParser.json())


const hikeRoute = require('./routes/hike')
app.use('/hike', hikeRoute)


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

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.listen(3001);
