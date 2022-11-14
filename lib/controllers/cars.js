const { Router } = require('express');
const { Car } = require('../models/Cars');

module.exports = Router() 
  .get('/', async (req, res) => {
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
  })

  .get('/:id', async (req, res) => {
    const motor = await Car.getCarByID(req.params.id);
    res.json(motor);
  })

  .post('/', async (req, res) => {
    const hummer = await Car.insertCar(req.body);
    res.json(hummer);
  })

  .put('/:id', async (req, res) => {
    const car = await Car.updateCarByID(req.params.id, req.body);
    res.json(car);
  })

;
