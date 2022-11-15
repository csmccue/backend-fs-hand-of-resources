const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET return all the foods', async () => {
    const res = await request(app).get('/foods');
    expect(res.body.length).toEqual(10);
  });

  it('GET return foods 9', async () => {
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
  it('PUT /foods/10 should update with new grocery name', async () => {
    const resp = await request(app).put('/foods/10').send({ grocery_name: 'That good good' });
    expect(resp.status).toBe(200);
    expect(resp.body.grocery_name).toBe('That good good');
  });

  it('DELETE /foods/9 should be deleted', async () => {
    const resp = await request(app).delete('/foods/9');
    expect(resp.status).toBe(204);
    const resp2 = await request(app).get('/foods/9');
    expect(resp2.status).toBe(404);
  });


  afterAll(() => {
    pool.end();
  });
});

