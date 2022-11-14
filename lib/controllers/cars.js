const { Router } = require('express');
const { Car } = require('../models/Cars');

module.export = Router() 
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
;
