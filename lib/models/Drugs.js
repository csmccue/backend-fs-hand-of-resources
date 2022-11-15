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

  static async insertDrug(newDrug) {
    const { rows } = await pool.query(`
      INSERT INTO drugs (company, name, generic, fda, country)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `,
    [newDrug.company, newDrug.name, newDrug.generic, newDrug.fda, newDrug.country]
    );
    return new Drug(rows[0]);
  }
  static async updateDrugByID(id, newDrug) {
    const drug = await Drug.getDrugByID(id);
    if (!drug) return null;
    const updatedData = { ...drug, ...newDrug };
    const { rows } = await pool.query(`
      UPDATE drugs
      SET company = $2, name = $3, generic = $4, fda = $5, country = $6
      WHERE id = $1
      RETURNING *
    `,
    [id, updatedData.company, updatedData.name, updatedData.generic, updatedData.fda, updatedData.country]
    );
    return new Drug(rows[0]);
  }




}

module.exports = Drug;
