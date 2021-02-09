const mongoose = require('mongoose');
const trailSchema = require('./trails-schema');
const Trail = mongoose.model('Trail', trailSchema, 'hike_data');
const fs = require('fs');
const { json } = require('express');
require('dotenv').config();

let data;
try {
  data = fs.readFileSync('./trails.json', 'utf8')
} catch (err) {
  console.error(err)
}

const uri = process.env.DB_LINK;
if (!uri) {
   console.log("No DB_LINK environment variable found, please provide one.")
   exit(1)
}

mongoose.connect(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(() => {
   console.log('Atlas Connected..');

    const jsonData = JSON.parse(data);
    Trail.insertMany(jsonData).then(() => mongoose.disconnect());
})
.catch(err => console.log(err))
