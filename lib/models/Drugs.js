const pool = require('../utils/pool');

class Drug {
  id;
  company;
  name;
  generic;
  FDA;
  country;

  constructor(row) {
    this.id = row.id;
    this.company = row.company;
    this.name = row.name;
    this.generic = row.generic;
    this.FDA = row.FDA;
    this.country = row.country;
  }
  static async getAllDrugs() {
    const { rows } = await pool.query('SELECT * from drugs');
    return rows.map((newRow) => new Drug(newRow));
  }

  static async getDruByID(id) {
    const { rows } = await pool.query('SELECT * from drugs where id = $1', [id]);
    if (!rows[0]) return null;
    return new Drug(rows[0]);
  }


}

module.exports = Drug;
