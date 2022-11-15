const pool = require('../utils/pool');

class Food {
  id;
  grocery_name;
  common_name;
  family;
  plant_name;
  is_it_good;

  constructor(row) {
    this.id = row.id;
    this.grocery_name = row.grocery_name;
    this.common_name = row.common_name;
    this.family = row.family;
    this.plant_name = row.plant_name;
    this.is_it_good = row.is_it_good;
  }
  static async getAllFoods() {
    const { rows } = await pool.query('SELECT * from foods');
    return rows.map((newRow) => new Food(newRow));
  }
  static async getFoodByID(id) {
    const { rows } = await pool.query('SELECT * from foods where id = $1', [id]);
    if (!rows[0]) return null;
    return new Food(rows[0]);
  }

  static async insertFood(newFood) {
    const { rows } = await pool.query(`
      INSERT INTO foods (grocery_name, common_name, family, plant_name, is_it_good)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `,
    [newFood.grocery_name, newFood.common_name, newFood.family, newFood.plant_name, newFood.is_it_good]
    );
    return new Food(rows[0]);
  }





}

module.exports = Food;
