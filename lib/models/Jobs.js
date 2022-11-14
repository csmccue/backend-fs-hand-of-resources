const pool = require('../utils.pool');

class Job {
  id;
  company;
  role;
  stock;
  salary;
  field;

  constructor(row) {
    this.id = row.id;
    this.company = row.company;
    this.role = row.role;
    this.stock = row.stock;
    this.salary = row.salary;
    this.field = row.field;
  }

  static async getAllJobs() {
    const { rows } = await pool.query('SELECT * from jobs');
    return rows.map((newRow) => new Job(newRow));
  }
}

module.exports = { Job };