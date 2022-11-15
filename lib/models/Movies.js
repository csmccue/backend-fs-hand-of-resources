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

  static async insertMovie(flick) {
    const { rows } = await pool.query(`
      INSERT INTO movies (title, genre, country, director, language)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `,
    [flick.title, flick.genre, flick.country, flick.director, flick.language]
    );
    return new Movie(rows[0]);
  }

  static async updateMovieByID(id, newMovie) {
    const moov = await Movie.getMovieByID(id);
    if (!moov) return null;
    const updatedData = { ...moov, ...newMovie };
    const { rows } = await pool.query(`
      UPDATE movies
      SET title = $2, genre = $3, country = $4, director = $5, language = $6
      WHERE id = $1
      RETURNING *
    `,
    [id, updatedData.title, updatedData.genre, updatedData.country, updatedData.director, updatedData.language]
    );
    return new Movie(rows[0]);
  }
  static async delete(id) {
    const { rows } = await pool.query(
      `
      DELETE from movies
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );
    if (!rows[0]) return null;
    return new Movie(rows[0]);
  }


}

module.exports = Movie;
