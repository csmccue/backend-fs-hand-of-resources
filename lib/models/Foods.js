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
}

module.exports = Food;
