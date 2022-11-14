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

  // test 2 - GET JOBS 3
  it('GET return jobs 3', async () => {
    const res = await request(app).get('/jobs/3');
    const test = {
      id: '3',
      company: 'Demimbu',
      role: 'Project Manager',
      salary: '7701',
    };
    expect(res.body).toEqual(test);
  });

  afterAll(() => {
    pool.end();
  });
});
