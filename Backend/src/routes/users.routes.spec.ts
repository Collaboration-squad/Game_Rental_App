import 'jasmine';
import * as request from 'supertest';
import app from '../app';
import { openMongooseConnection, dropMongooseDb } from '../conn';
import { config } from '../config/app-config';

describe('Users route', () => {
  beforeAll(done => {
    openMongooseConnection(config.testDb)
      .then(() => {
        console.log('set testing env db');
        done();
      })
      .catch(done);
  });
  afterAll(() => {
    //clean up db after tests
    dropMongooseDb('users');
  });

  describe('/user', () => {
    it('should response to /user post method', done => {
      const user = {
        email: 'test@test',
        password: '1234'
      };

      request(app)
        .post(`/user`)
        .send(user)
        .then(resp => {
          expect(resp.status).toEqual(200);
          expect(resp.body.msg).toEqual('user created');
          done();
        })
        .catch(err => done());
    });

    it('should return error msg when request body is broken', done => {
      const brokenUser = {
        password: '1234'
      };

      request(app)
        .post(`/user`)
        .send(brokenUser)
        .then(resp => {
          expect(resp.status).toEqual(500);
          expect(resp.body.msg).toEqual('failed to create user');
          done();
        })
        .catch(err => done());
    });
  });
});
