import 'mocha';
import * as request from 'supertest';
import app from '../app';
import { expect } from 'chai';

describe('/games', () => {
  it('should call server', done => {
    request(app)
      .get(`/games`)
      .end((err, resp) => {
        if (err) return done(err);
        expect(resp.status).to.equal(200);
        expect(resp.body).to.have.property('msg');
        done();
      });
  });
});
