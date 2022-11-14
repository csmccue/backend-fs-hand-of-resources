const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  // test 1
  it('return all car data', async () => {
    const res = await request(app).get('/cars');
    expect(res.body.length).toEqual(10);
  });

  // test 2
  it('return car detail with id', async () => {
    const res = await request(app).get('/cars/1');
    const test = {
      id: '1',
      make: 'Toyota',
      model: 'TundraMax',
      // year: 2009,
      color: 'Fuscia',
      origin: 'United States',
    };
    expect(res.body).toEqual(test);


  });

  afterAll(() => {
    pool.end();
  });
});
