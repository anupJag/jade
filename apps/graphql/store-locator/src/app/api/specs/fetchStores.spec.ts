jest.mock('../../../../../../libs/graphql/base/src/lib/db');

const supertest = require('supertest');
import server from '../../../main';

let request;
let app;

describe('Store Locator', () => {
  beforeAll(async () => {
    app = await server;
    request = supertest(app.server);
  });

  afterAll(async done => {
    await app.close(done);
  });

  it('Fetch all stores', async done => {
    request
      .post('/graphql')
      .send({
        query: '{ fetchStores{ id, name} }',
      })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body.data.fetchStores.length).toEqual(0);
        done();
      });
  });
});
