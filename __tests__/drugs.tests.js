const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it.skip('GET return all drugs data', async () => {
    const res = await request(app).get('/drugs');
    expect(res.body.length).toEqual(10);
  });

  it('GET return drugs 7', async () => {
    const res = await request(app).get('/drugs/7');
    const test = {
      id: '7',
      company: 'Antigen Laboratories, Inc.',
      name: 'Treatment Set TS345381',
      generic: 'Treatment Set TS345381',
      fda: '49288-0847',
      country: 'MG'
    };
    expect(res.body).toEqual(test);
  });
















  afterAll(() => {
    pool.end();
  });
});
