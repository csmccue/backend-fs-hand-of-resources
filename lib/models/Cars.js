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
    this.year = row.year;
    this.color = row.color;
    this.origin = row.origin;
  }

  static async getAllCars() {
    const { rows } = await pool.query('SELECT * from cars');
    return rows.map((newRow) => new Car(newRow));
  }

  static async getCarByID(id) {
    const { rows } = await pool.query('SELECT * from cars where id = $1', [id]);
    // console.log(rows[0]);
    return new Car(rows[0]);
  }

  static async insertCar(car) {
    const { rows } = await pool.query(`
      INSERT INTO cars (make, model, year, color, origin)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `,
    [car.make, car.model, car.year, car.color, car.origin]
    );
    return new Car(rows[0]);
  }

  static async updateCarByID(id, newCar) {
    const car = await Car.getCarByID(id);
    if (!car) return null;
    const updatedData = { ...car, ...newCar };
    const { rows } = await pool.query(`
      UPDATE cars
      SET make = $2, model = $3, year = $4, color = $5, origin = $6
      WHERE id = $1
      RETURNING *
    `,
    [id, updatedData.make, updatedData.model, updatedData.year, updatedData.color, updatedData.origin]
    );
    return new Car(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
      DELETE from cars
      HERE id = $1
      RETURNING *
      `,
      [id]
    );
    return new Car(rows[0]);
  }
}

module.exports = { Car };
