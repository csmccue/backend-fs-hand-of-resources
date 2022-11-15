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

  // test 3 - POST
  it('POST should create new movie in data base', async () => {
    const newMovie = {
      id: '11',
      title: 'Starship Troopers',
      genre: 'Comedy',
      country: 'USA',
      director: 'Arnold',
      language: 'Spanish'
    };
    const resp = await request(app).post('/movies').send(newMovie);
    expect(resp.status).toBe(200);
  });

  // test 4 - PUT
  it('PUT /movies/6 should update with new director', async () => {
    const resp = await request(app).put('/movies/6').send({ director: 'Emily' });
    expect(resp.status).toBe(200);
    expect(resp.body.director).toBe('Emily');
  });

  // test 5 - DELETE
  it('DELETE /movies/4 should be deleted', async () => {
    const resp = await request(app).delete('/movies/4');
    expect(resp.status).toBe(204);
    const resp2 = await request(app).get('/movies/4');
    expect(resp2.status).toBe(404);
  });





  afterAll(() => {
    pool.end();
  });
});
