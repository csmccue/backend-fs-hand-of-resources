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

  it.skip('GET return drugs 7', async () => {
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

  it('POST should create new drug in data base', async () => {
    const newDrug = {
      id: '11',
      company: 'Your Moms House',
      name: 'Hello There',
      generic: 'Cialis',
      fda: '49222-0222',
      country: 'NY'
    };
    const resp = await request(app).post('/drugs').send(newDrug);
    expect(resp.status).toBe(200);
  });
















  afterAll(() => {
    pool.end();
  });
});
