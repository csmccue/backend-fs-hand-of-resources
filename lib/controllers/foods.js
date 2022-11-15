const { Router } = require('express');
const Food = require('../models/Foods');

module.exports = Router() 
  .get('/', async (req, res, next) => {
    try {
      const resp = await Food.getAllFoods();
      const foods = resp.map(({
        id,
        grocery_name,
        common_name,
        family,
        plant_name,
        is_it_good
      }) => ({
        id,
        grocery_name,
        common_name,
        family,
        plant_name,
        is_it_good
      }));
      res.json(foods);
    } catch(e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const food = await Food.getFoodByID(req.params.id);
      if (!food) next();
      res.json(food);
    } catch(e) {
      next(e);
    }
  }) 

  .post('/', async (req, res, next) => {
    try {
      const food = await Food.insertFood(req.body);
      res.json(food);
    } catch(e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const food = await Food.updateFoodByID(req.params.id, req.body);
      res.json(food);
    } catch (e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const food = await Food.delete(req.params.id);
      if (!food) next();
      res.status(204);
      res.send();
    } catch (e) {
      next(e);
    }
  })



;
