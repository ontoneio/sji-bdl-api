const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const dummyServices = require('./dummy_data');

const Service = mongoose.model('service');

describe('Services Controller', () => {
  beforeEach(done => {
    const newService = new Service(dummyServices.serviceTwo)
    newService.save().then(() => done());
  });

  it('POST to /api/services can create a new service', (done) => {
    const service = dummyServices.serviceOne;

    request(app)
      .post('/api/services')
      .send(service)
      .end((err, res) => {
        assert(res.body.name === 'St James Infirmary');
        done();
      });
  });


  it('GET to /api/services returns a list of services', (done) => {
    request(app)
      .get('/api/services')
      .end((err, res) => {
        assert(res.body.length === 1);
        done()
      })
  });
});
