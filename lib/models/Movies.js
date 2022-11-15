const pool = require('../utils/pool');

class Movie {
  id;
  title;
  genre;
  country;
  director;
  language;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.genre = row.genre;
    this.country = row.country;
    this.director = row.director;
    this.language = row.language;
  }

  static async getAllMovies() {
    const { rows } = await pool.query('SELECT * from movies');
    return rows.map((newRow) => new Movie(newRow));
  }
}

module.exports = Movie;
