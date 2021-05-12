const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

const userSchema = require('../models/users-schema')
const User = mongoose.model('User', userSchema, 'Users')

const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
  const { email, password, user_type } = req.body
  if (user_type == null) {
    res.status(404).send('Invalid user type')
  }

  User.findOne({ user_email: email }).then(function (result) {
    if (!result) {
      console.log('Invalid email')
      res.status(404).send('Invalid email')
    } else {
      let userPassword = result.password
      const valid = bcrypt.compareSync(password, userPassword)
      if (valid) {
        console.log('login successful')
        res.send(result)
      } else {
        console.log('Invalid password')
        res.status(404).send('Invalid password')
      }
    }
  })
})

// GET individual User
router.get('/:id', async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id })
    res.json(user)
  } catch (err) {
    res.json({ message: err })
  }
})

// reset password

module.exports = router
