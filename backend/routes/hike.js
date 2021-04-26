const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const trailSchema = require("../models/trails-schema");
const Trail = mongoose.model("Trail", trailSchema, "hike_data");

// HIKES

router.get("/:id/reviews", (req, res) => {
  res.send("Get review for each hike page!");
});

router.get("/:id/reviews", (req, res) => {
  res.send("Get review for each hike page!");
});

router.post("/:id/reviews", (req, res) => {
  console.log(req.body);
  res.send("Post a review on this hike page");
});

// testing GET all hikes

router.get("/", async (req, res) => {
  try {
    const hikes = await Trail.find({}).sort({ rating: -1 });
    res.json(hikes);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/dog-friendly", async (req, res) => {
  try {
    const hikes = await Trail.find({ dog_friendly: true }).sort({ rating: -1 });
    res.json(hikes);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET individual hike
router.get("/:id", async (req, res) => {
  try {
    const hikes = await Trail.find({ _id: req.params.id });
    res.json(hikes);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE individual hike
router.delete("/:id", async (req, res) => {
  try {
    const removedHike = await Trail.remove({ _id: req.params.id });
    res.json(removedHike);
  } catch (err) {
    res.json({ message: err });
  }
});

// Post request to add a hike
router.post("/", (req, res) => {
  const hike = new Trail({
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    difficulty: req.body.difficulty,
    // length: req.body.length,
    // elevation_gain: req.body.elevation_gain,
    // route_type: req.body.route_type,
    rating: req.body.rating,
    reviews: req.body.reviews,
    tags: req.body.tags,
  });

  hike
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// REVIEWS

// GET All the reviews of an individual hike
router.get("/:id/review", async (req, res) => {
  try {
    const hikes = await Trail.find({ _id: req.params.id });
    res.json(hikes[0].reviews);
  } catch (err) {
    res.json({ message: err });
  }
});

// POST method to add a review on the individual hike page by hikeid
router.post("/:id/review", async (req, res) => {
  try {
    const reviewSchema = {
      user_id: req.body.user_id,
      reviewBody: req.body.reviewBody,
      hike_id: req.body.hike_id,
    };
    await Trail.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $push: {
          reviews: reviewSchema,
        },
      }
    );
    res.json({ Response: "Review is added" });
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE individual review by id
router.delete("/:id/review/:reviewID", async (req, res) => {
  try {
    await Trail.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $pull: {
          reviews: { _id: req.params.reviewID },
        },
      }
    );
    res.json({ Response: "Review is deleted" });
  } catch (err) {
    res.json({ message: err });
  }
});

/** *****************POST RATING FOR INDIV HIKE******************** */

const postRating = async (id, rate) => {
  const hike = await Trail.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        rating: rate,
      },
    }
  ); // Trail.find({ "_id": id }, function (err, hike) {
  // hike.rating.push(Number(rating))
  hike.save();
  console.log(hike);
};

router.post("/:id/rating", async (req, res) => {
  try {
    res.status(200);
    const _id = req.params.id;
    const rating = req.body.rating;
    console.log(_id, rating);
    await postRating(_id, rating);
    res.json({ Response: "Rating of " + rating + " received for Hike " + _id });
    return;
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
