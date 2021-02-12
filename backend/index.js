const env = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const app = express();
env.config();

app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'CORS-enabled for all origins.'})
})

const uri = process.env.DB_LINK;
if (!uri) {
   console.log("No DB_LINK environment variable found, please provide one.")
   return 1;
}
mongoose.connect(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(() => {
   console.log('Atlas Connected..')
})
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.listen(3001);
