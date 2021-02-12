const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const trailSchema = require('../models/trails-schema');
const Trail = mongoose.model('Trail', trailSchema, 'hike_data');

router.get('/testing', (req, res) => {
   res.send('List of all hikes!');
 })

router.get('/:id', (req, res) => {
   res.send('Individual hike!');
 })

router.get('/:id/reviews', (req, res) => {
   res.send('Get review for each hike page!');
 })

router.get('/:id/reviews', (req, res) => {
   res.send('Get review for each hike page!');
 })

 router.post('/:id/reviews', (req, res) => {
   console.log(req.body);
   res.send('Post a review on this hike page');
 })


 //testing GET all hikes

 router.get('/', async (req, res) => {
    try {
       const hikes = await Trail.find();
       res.json(hikes);
    }
    catch(err){
      res.json({message:err});
    }
});
 

 //testing Post request

 router.post('/', (req, res) => {
   const hike = new Trail({
      title: req.body.title,
      description: req.body.description,
      difficulty: req.body.difficulty,
      length: req.body.length,
      elevation_gain: req.body.elevation_gain,
      route_type: req.body.route_type,
      rating: req.body.rating,
      reviews: req.body.reviews,
      tags: req.body.tags
   });
   
   hike.save()
      .then(data => {
         res.json(data);
      })
      .catch(err => {
         res.json({message: 'failed'});
      });
 });

 module.exports = router;