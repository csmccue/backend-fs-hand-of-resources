const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  // test 1 - GET ALL
  it('GET return all car data', async () => {
    const res = await request(app).get('/cars');
    expect(res.body.length).toEqual(10);
  });

  // test 2 - GET DETAIL
  it('GET return car detail with id', async () => {
    const res = await request(app).get('/cars/1');
    const test = {
      id: '1',
      make: 'Toyota',
      model: 'TundraMax',
      year: '2009',
      color: 'Fuscia',
      origin: 'United States',
    };
    expect(res.body).toEqual(test);
  });

  // test 3 - POST
  it('POST should create new car in data base', async () => {
    const newCar = {
      make: 'Hummer',
      model: 'Hummer',
      year: 'Hummer',
      color: 'Hummer',
      origin: 'Hummer',
    };
    const resp = await request(app).post('/cars').send(newCar);
    expect(resp.status).toBe(200);
  });

  // test 4 - PUT
  it('PUT /cars/2 should update with id #2', async () => {
    const resp = await request(app).put('/cars/2').send({ color: 'White' });
    expect(resp.status).toBe(200);
    expect(resp.body.color).toBe('White');
  });

  // test 5 - DELETE
  it.only('DELETE THIS NEPHEW /cars/1 should delete cars #1', async () => {
    const resp = await request(app).delete('/cars/1');
    expect(resp.status).toBe(204);

    const getResp = await request(app).get('/cars/1');
    expect(getResp.status).toBe(500);
  });

  afterAll(() => {
    pool.end();
  });
});
