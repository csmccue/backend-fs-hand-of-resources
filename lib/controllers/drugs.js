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
  })
  .get('/:id', async (req, res, next) => {
    try {
      const drug = await Drug.getDrugByID(req.params.id);
      if (!drug) next();
      res.json(drug);
    } catch(e) {
      next(e);
    }
  }) 

  .post('/', async (req, res, next) => {
    try {
      const drug = await Drug.insertDrug(req.body);
      res.json(drug);
    } catch(e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const drug = await Drug.updateMovieByID(req.params.id, req.body);
      res.json(drug);
    } catch (e) {
      next(e);
    }
  })



;

