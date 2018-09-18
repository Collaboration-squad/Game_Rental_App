import "jasmine";
import * as request from "supertest";
import * as nock from "nock";
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

  it("should login user", done => {
    request(app)
      .post(`/login`)
      .send(mockUser)
      .then(resp => {
        expect(resp.status).toEqual(200);
        expect(resp.body.msg).toBeTruthy();
        done();
      })
      .catch(() => done());
  });

  it("should prevent to login when wrong password is passed", done => {
    request(app)
      .post(`/login`)
      .send(mockUserWithWrongPassword)
      .then(resp => {
        expect(resp.status).toEqual(401);
        expect(resp.body.msg).toEqual("wrong login or password");
        done();
      })
      .catch(() => done());
  });

  it("should prevent to login when wrong credentials are passed", done => {
    request(app)
      .post(`/login`)
      .send(mockUserWithWrongEmail)
      .then(resp => {
        expect(resp.status).toEqual(401);
        expect(resp.body.msg).toEqual("wrong login or password");
        done();
      })
      .catch(() => done());
  });

  it("should prevent to login when wrong credentials are passed", done => {
  nock("http://localhost:3000")
        .post("http://localhost:3000/login", mockUser)
      // .replyWithError('internal err')
      .reply(250, { body: "surprise" });

      request(app)
      .post(`/login`)
      .send(mockUser)
      .then((res)=>{
        console.log('error here')
        console.log(res.status)
        expect(res.status).toBe(250);
        done()
      }).catch(err=> done())
  });
});
