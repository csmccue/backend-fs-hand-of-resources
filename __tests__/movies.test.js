const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  // test 1
  it('GET return all movies data', async () => {
    const res = await request(app).get('/movies');
    expect(res.body.length).toEqual(10);
  });

  // test 2 - GET movies 5 DETAIL
  it('GET return movies 5', async () => {
    const res = await request(app).get('/movies/5');
    const test = {
      id: '5',
      title: 'Tunnel, The (Tunnel, Der)',
      genre: 'Action|Drama|Thriller',
      country: 'China',
      director: 'Keslie Clausewitz',
      language: 'Guaraní'
    };
    expect(res.body).toEqual(test);
  });

  afterAll(() => {
    pool.end();
  });
});
