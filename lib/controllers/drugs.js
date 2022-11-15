const { Router } = require('express');
const Drug = require('../models/Drugs');

module.exports = Router() 
  .get('/', async (req, res, next) => {
    try {
      const resp = await Drug.getAllDrugs();
      const drugs = resp.map(({
        id,
        company,
        name,
        generic,
        FDA,
        country
      }) => ({
        id,
        company,
        name,
        generic,
        FDA,
        country
      }));
      res.json(drugs);
    } catch(e) {
      next(e);
    }
  });

