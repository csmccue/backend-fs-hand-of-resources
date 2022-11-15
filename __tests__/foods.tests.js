const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it.skip('GET return all the foods', async () => {
    const res = await request(app).get('/foods');
    expect(res.body.length).toEqual(10);
  });

  it.skip('GET return foods 9', async () => {
    const res = await request(app).get('/foods/9');
    const test = {
      id: '9',
      grocery_name: 'Wine - Cousino Macul Antiguas',
      common_name: 'Veiny Pea',
      family: 'Fabaceae',
      plant_name: 'Lathyrus venosus Muhl. ex Willd.',
      is_it_good: false
    };
    expect(res.body).toEqual(test);
  });

  it('POST should create new food in data base', async () => {
    const newFood = {
      id: '11',
      grocery_name: 'Good Beer',
      common_name: 'Veiny Forearm',
      family: 'Not mine',
      plant_name: 'Cauliflower',
      is_it_good: true
    };
    const resp = await request(app).post('/foods').send(newFood);
    expect(resp.status).toBe(200);
  });


  afterAll(() => {
    pool.end();
  });
});

