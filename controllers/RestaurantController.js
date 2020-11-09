const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');

const Restaurant  = require('../models/restaurant');

router.get('/', async(req, res) => {
  try{
    const allRestaurant = await Restaurant.find();
    res.json({
      status: 200,
      data: allRestaurant
    })
  }catch(err){
      res.send(err)
  }

});


router.get('/:id', async(req, res) => {
  try{
    const oneRestaurant = await Restaurant.findById(req.params.id)
    res.json({
      status: 200,
      data: oneRestaurant
    })
  }catch(err){
    res.send(err)
  }
})


router.post('/', async(req, res) => {
  console.log(req.body);
  try{
    const createRestaurant = await Restaurant.create(req.body)
      res.json({
        status:200,
        data: createRestaurant,
      })

  }catch(err){
    res.send(err)
  }
});


router.put('/:id', async(req, res) => {
  try{
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json({
      status: 200,
      data: updatedRestaurant
    })
  }catch(err){
    res.send(err)
  }
});


router.delete('/:id', async(req, res) => {
  try{
    const deletedRestaurant = await Restaurant.findByIdAndRemove(req.params.id);
    res.json({
      status: 200,
      data: deletedRestaurant
    })
  }catch(err){
    res.send(err)
  }
});

module.exports = router
