const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  // test 1 - GET ALL JOBS
  it('GET return all jobs data', async () => {
    const res = await request(app).get('/jobs');
    expect(res.body.length).toEqual(10);
  });

  // test 2 - GET JOBS 3 DETAIL
  it('GET return jobs 3', async () => {
    const res = await request(app).get('/jobs/3');
    const test = {
      id: '3',
      company: 'Demimbu',
      role: 'Project Manager',
      stock: 'M&T Bank Corporation',
      salary: 7701,
      field: 'Support'
    };
    expect(res.body).toEqual(test);
  });

  // test 3 - POST
  it('POST should create new job in data base', async () => {
    const newJob = {
      id: '11',
      company: 'Badonk Bidet',
      role: 'CEO of Bidets',
      stock: 'BB Foundation',
      salary: 140000,
      field: 'Leadership'
    };
    const resp = await request(app).post('/cars').send(newJob);
    expect(resp.status).toBe(200);
  });


  afterAll(() => {
    pool.end();
  });
});
