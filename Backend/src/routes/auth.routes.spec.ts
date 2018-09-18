import "jasmine";
import * as request from "supertest";
import app from "../app";
import { config } from "../config/app-config";
import { User } from "../models/user.model";
import {
  mockUser,
  mockUserWithHashedPassword,
  mockUserWithWrongPassword,
  mockUserWithWrongEmail
} from "../mocks/users.mock";
import { connector } from "../connectors/mongoose.connector";

describe("/login", () => {
  beforeAll(done => {
    connector
      .openConnection(config.testDb)
      .then(done)
      .catch(done);
  });

  beforeAll(done => {
    const user = new User(mockUserWithHashedPassword);
    // populate db for testing env
    user
      .save()
      .then(done)
      .catch(err => {
        console.log(err, "error while preparing test db");
        done();
      });
  });

  afterAll(() => {
    connector.dropDb("users");
  });

<<<<<<< HEAD
  it("should login user", done => {
    request(app)
      .post(`/login`)
      .send(mockUser)
      .then(resp => {
        expect(resp.status).toEqual(200);
        expect(resp.body.msg).toBeTruthy();
        done();
      })
      .catch(done);
  });

  it("should prevent to login when wrong password is passed", done => {
    request(app)
      .post(`/login`)
      .send(mockUserWithWrongPassword)
      .then(resp => {
        expect(resp.status).toEqual(401);
        expect(resp.body.msg).toEqual("invalid email");
        done();
      })
      .catch(done);
  });

  it("should prevent to login when wrong credentials are passed", done => {
    request(app)
      .post(`/login`)
      .send(mockUserWithWrongEmail)
      .then(resp => {
        expect(resp.status).toEqual(404);
        expect(resp.body.msg).toEqual("wrong login or password");
        done();
      })
      .catch(done);
=======
  describe('/login', () => {
    it('should login user', done => {
      request(app)
        .post(`/login`)
        .send(mockUser)
        .then(resp => {
          console.log(resp);
          expect(resp.status).toEqual(200);
          expect(resp.body.msg).toBeTruthy();
          done();
        })
        .catch(err => done());
    });

    it('should prevent to login when wrong password is passed', done => {
      mockUser.password ="12345"
      request(app)
        .post(`/login`)
        .send(mockUser)
        .then(resp => {
          expect(resp.status).toEqual(401);
          expect(resp.body.message).toEqual('invalid email');
          done();
        })
        .catch(err => done());
    });

    it('should prevent to login when wrong credentials are passed', done => {
      mockUser.email = 'test@wrong.com'
      request(app)
        .post(`/login`)
        .send(mockUser)
        .then(resp => {
          expect(resp.status).toEqual(404);
          expect(resp.body.message).toEqual('wrong login or password');
          done();
        })
        .catch(err => done());
    });
>>>>>>> b1c4d09854a20881434d974af558b52644a2c127
  });
});
