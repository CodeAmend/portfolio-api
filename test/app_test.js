const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');

describe("App", () => {

  it("will return starter json", (done) => {
    request(app)
    .get('/')
    .end((err, res) => {
      expect(res.status).to.eql(200);
      expect(res.body).to.have.property('title');
      done();
    });
  });

});
