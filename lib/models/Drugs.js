const pool = require('../utils/pool');

class Drug {
  id;
  company;
  name;
  generic;
  fda;
  country;

  constructor(row) {
    this.id = row.id;
    this.company = row.company;
    this.name = row.name;
    this.generic = row.generic;
    this.fda = row.fda;
    this.country = row.country;
  }
  static async getAllDrugs() {
    const { rows } = await pool.query('SELECT * from drugs');
    return rows.map((newRow) => new Drug(newRow));
  }

  static async getDrugByID(id) {
    const { rows } = await pool.query('SELECT * from drugs where id = $1', [id]);
    if (!rows[0]) return null;
    return new Drug(rows[0]);
  }

  static async insertDrug(viagra) {
    const { rows } = await pool.query(`
      INSERT INTO drugs (company, name, generic, fda, country)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `,
    [viagra.company, viagra.name, viagra.generic, viagra.fda, viagra.country]
    );
    return new Drug(rows[0]);
  }

}

module.exports = Drug;
