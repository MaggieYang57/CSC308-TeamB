const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const userSchema = require('../models/users-schema');
const User = mongoose.model('User', userSchema, 'Users');

const bcrypt = require('bcrypt');
 
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
   User.findOne({'user_email': req.body.user_email}).then(function(result) {
      if (result)
      {
         console.log("email already in use")
         res.status(404).send()
      }
      else
      {
         user.save()
         .then(data => {
            res.json(data);
         })
         .catch(err => {
            res.json({ message: err });
         });
      }
   }).catch(err => {
      console.log(err)
      res.send(500).send()})

});

module.exports = router;
 