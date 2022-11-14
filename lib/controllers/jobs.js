const { Router } = require('express');
const { Job } = require('../models/Jobs');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const opportunities = await Job.getAllJobs();
      const filtered = opportunities.map(({
        id,
        company,
        role,
        stock,
        salary,
        field
      }) => ({
        id,
        company,
        role,
        stock,
        salary,
        field
      }));
      res.json(filtered);
    } catch(e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const motor = await Job.getJobByID(req.params.id);
      res.json(motor);
    } catch(e) {
      next(e);
    }
  })  

  .post('/', async (req, res, next) => {
    try {
      const job = await Job.insertJob(req.body);
      res.json(job);
    } catch(e) {
      next(e);
    }
  })
  
  .put('/:id', async (req, res, next) => {
    try {
      const job = await Job.updateJobByID(req.params.id, req.body);
      res.json(job);
    } catch (e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const job = await Job.delete(req.params.id);
      if (!job) next();
      res.status(204);
      res.send();
    } catch (e) {
      next(e);
    }

  })
;
