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

  it('Fetch specific store', async done => {
    request
      .post('/graphql')
      .send({
        query: `mutation {
          addStore(details: {
            name:"Covent Garden Metro", 
            description: "Covent Garden Metro", 
            address:{
              addressLine1: "22-25 Bedford St",
              addressLine2: "Covent Garden",
              city: "London",
              state: "London",
              country: "United Kingdom",
              postalCode: "WC2E 9EQ"
            },
            contactNo:["0345 026 9353"],
            location:{ latitude:51.507404, longitude:-0.12724},
            openHourInfo: "Opening hours vary for some facilities"
            thumbnailImage:"http://lorempixel.com/256/256/sports/1/",
            images:[
              "http://lorempixel.com/500/500/sports/1/"
            ]
            openHours: {
              sun: {
                openingTime: "07:00",
                closingTime: "23:00"
              }, 
              mon: {
                openingTime: "07:00",
                closingTime: "23:00"
              }, 
              tue: {
                openingTime: "07:00",
                closingTime: "23:00"
              }, 
              wed: {
                openingTime: "07:00",
                closingTime: "23:00"
              },
              thu: {
                openingTime: "07:00",
                closingTime: "23:00"
              },
              fri: {
                openingTime: "07:00",
                closingTime: "23:00"
              },
              sat: {
                openingTime: "07:00",
                closingTime: "23:00"
              }
            }
            timezone: "+5.0"
          }) {
            id
            name
        }}`,
      })
      .set('Accept', 'application/json')
      .end(async function (err, res) {
        const storeId = res.body.data.addStore.id;
        request
          .post('/graphql')
          .send({
            query: `query{fetchStore(storeId: "${storeId}") {
                id
                name
            }}`,
          })
          .set('Accept', 'application/json')
          .end(function (err, res) {
            if (err) return done(err);
            expect(res.body).toBeInstanceOf(Object);
            expect(res.body.data.fetchStore.name).toBeDefined();
            done();
          });
      });
  });

  it('Fetch invalid store, should throw an error', async done => {
    const storeId = 'invalid-store-id';
    request
      .post('/graphql')
      .send({
        query: `query{fetchStore(storeId: "${storeId}") {
                id
                name
            }}`,
      })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body.errors.length).toBeGreaterThan(0);
        done();
      });
  });
});
