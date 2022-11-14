const pool = require('../utils/pool');

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

  static async getJobByID(id) {
    const { rows } = await pool.query('SELECT * from jobs where id = $1', [id]);
    // console.log(rows[0]);
    if (!rows) return null;
    return new Job(rows[0]);
  }

  static async insertJob(job) {
    const { rows } = await pool.query(`
      INSERT INTO jobs (company, role, stock, salary, field)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `,
    [job.company, job.role, job.stock, job.salary, job.field]
    );
    return new Job(rows[0]);
  }

  static async updateJobByID(id, newJob) {
    const job = await Job.getJobByID(id);
    if (!job) return null;
    const updatedData = { ...job, ...newJob };
    const { rows } = await pool.query(`
      UPDATE jobs
      SET company = $2, role = $3, stock = $4, salary = $5, field = $6
      WHERE id = $1
      RETURNING *
    `,
    [id, updatedData.company, updatedData.role, updatedData.stock, updatedData.salary, updatedData.field]
    );
    return new Job(rows[0]);
  }




}

module.exports = { Job };
