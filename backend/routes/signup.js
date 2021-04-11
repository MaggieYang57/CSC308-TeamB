const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const userSchema = require('../models/users-schema');
const User = mongoose.model('User', userSchema, 'Users');

const bcrypt = require('bcrypt');

router.post('/email-taken', async (req, res) =>{
    const {email, user} = req.body
    /*let userType = getUser(user);
  
    userType.findOne({'email': email}).then(function(result) {
       if (result) {
          console.log("email already in use")
          res.status(404).send("email already in use")
       } 
       else {
          res.status(200).send("valid email")
       }
    }); */
 });
 
/* router.get('/delete', async (req, res) =>{
    var myquery = { 'firstName': "Emily" };
    SiteManager.deleteMany(myquery, function(err, obj) {
       if (err) throw err;
       console.log(obj);
    });
 }); */
 
 router.post('/', async (req, res) =>{
     var passHash = bcrypt.hashSync(req.body.password, 9);

     const user = new User({
      user_email: req.body.user_email,
      user_type: req.body.user_type,
      password: passHash,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      saved_trails: [],
      reviews: []
    });

   console.log(user);
    user.save()
      .then(data => {
         res.json(data);
      })
      .catch(err => {
         res.json({ message: err });
      });

  });
 

 // Generates random string ID. Very low probability of duplicate IDs
 function getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
 }

  module.exports = router;
 