const { Router } = require('express');
const Movie = require('../models/Movie');

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
;

