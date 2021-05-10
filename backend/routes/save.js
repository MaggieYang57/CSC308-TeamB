const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const userSchema = require("../models/users-schema");
const User = mongoose.model("User", userSchema, "Users");

/* ******************SAVE HIKE FOR ACCOUNT******************** */

// add hike to account
router.post("/:id", async (req, res) => {
    const hike = req.body.hike;
    const user = req.body.user;
    const account = await User.findByIdAndUpdate(
      {
        _id: user,
      },
      {
        $push: {
          saved_trails: hike,
        },
      }
    );
    account.save();
    console.log(account);
  });
  
  
router.delete("/:id", async (req, res) => {
    const hike = req.body.hike;
    const user = req.body.user;
    try {
      await User.findByIdAndUpdate(
        {
          _id: user,
        },
        {
          $pull: {
            saved_trails: hike,
          },
        }
      );
      console.log("hike unsaved")
    } catch (err) {
      res.json({ message: err });
    }
  });
  
router.post("/:id/check", async (req, res) => {
    const hike = req.body.hike;
    const user = req.body.user;
    await User.findOne({ _id: user})
    .then(function (err, result) {
        if (err) {
        console.log(err)
        }
        else
        {
            for (let i = 0; i < result.saved_trails.length; i++) { 
                if (result.saved_trails[i] === hike)
                    res.status(200).send("already saved")
                else
                    res.status(404).send("not saved")
            }
        }
    })
    .catch((err) => {
      console.log(err);
      res.send(500).send();
    }) 
});  

  module.exports = router;
