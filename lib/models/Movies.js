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
  static async getMovieByID(id) {
    const { rows } = await pool.query('SELECT * from movies where id = $1', [id]);
    if (!rows[0]) return null;
    return new Movie(rows[0]);
  }






}

module.exports = Movie;
