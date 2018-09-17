import 'jasmine';
import * as request from 'supertest';
import app from '../app';
import { config } from '../config/app-config';
import { connector } from '../connectors/mongoose.connector';

describe('Users route', () => {
  beforeAll(done => {
    connector
      .openConnection(config.testDb)
      .then(() => {
        console.log('set testing env db');
        done();
      })
      .catch(done);
  });
  afterAll(() => {
    //clean up db after tests
    connector.dropDb('users');
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
