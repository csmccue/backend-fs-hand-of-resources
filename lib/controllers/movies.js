const { Router } = require('express');
const Movie = require('../models/Movies');

module.exports = Router() 
  .get('/', async (req, res, next) => {
    try {
      const resp = await Movie.getAllMovies();
      const flicks = resp.map(({
        id,
        title,
        genre,
        country,
        director,
        language
      }) => ({
        id,
        title,
        genre,
        country,
        director,
        language
      }));
      res.json(flicks);
    } catch(e) {
      next(e);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const moov = await Movie.getMovieByID(req.params.id);
      if (!moov) next();
      res.json(moov);
    } catch(e) {
      next(e);
    }
  }) 
  
  
  .post('/', async (req, res, next) => {
    try {
      const moov = await Movie.insertMovie(req.body);
      res.json(moov);
    } catch(e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const moov = await Movie.updateMovieByID(req.params.id, req.body);
      res.json(moov);
    } catch (e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const resp = await Movie.delete(req.params.id);
      if (!resp) next();
      res.status(204);
      // console.log(resp);
      res.send();
    } catch (e) {
      next(e);
    }
  })











;

