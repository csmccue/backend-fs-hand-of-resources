const pool = require('../utils/pool');

class Car {
  id;
  make;
  model;
  year;
  color;
  origin;

  constructor(row) {
    this.id = row.id;
    this.make = row.make;
    this.model = row.model;
    this.color = row.color;
    this.origin = row.origin;
  }

  static asyc getAllCars() {
    const { rows } = await pool.query('SELECT from cars');
    return rows.map((newRow) => new Car(newRow))
  }
}