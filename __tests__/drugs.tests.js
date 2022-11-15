const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET return all drugs data', async () => {
    const res = await request(app).get('/drugs');
    expect(res.body.length).toEqual(10);
  });
  afterAll(() => {
    pool.end();
  });
});
