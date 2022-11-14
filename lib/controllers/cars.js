const { Router } = require('express');
const { Car } = require('../models/Cars');

module.exports = Router() 
  .get('/', async (req, res, next) => {
    try {
      const fleet = await Car.getAllCars();
      const filtered = fleet.map(({
        id,
        make,
        model,
        year,
        color,
        origin,
      }) => ({
        id, 
        make,
        model,
        year,
        color,
        origin
      }));
      res.json(filtered);
    } catch (e) {
      next(e);
    }

  })

  .get('/:id', async (req, res, next) => {
    try {
      const motor = await Car.getCarByID(req.params.id);
      res.json(motor);
    } catch(e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const hummer = await Car.insertCar(req.body);
      res.json(hummer);
    } catch(e) {
      next(e);
    }

  })

  .put('/:id', async (req, res, next) => {
    try {
      const car = await Car.updateCarByID(req.params.id, req.body);
      res.json(car);
    } catch (e) {
      next(e);
    }

  })

  .delete('/:id', async (req, res, next) => {
    try {
      const car = await Car.delete(req.params.id);
      if (car);
      res.status(204);
      res.send();
    } catch (e) {
      next(e);
    }

  })
;
