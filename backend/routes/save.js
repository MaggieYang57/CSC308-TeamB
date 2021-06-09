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

  module.exports = router;
