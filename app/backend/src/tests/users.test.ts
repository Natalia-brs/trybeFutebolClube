import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/Users'
import { userLogin, noEmail, noPass } from './mocks/mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Endpoint /login', () => {
  afterEach(sinon.restore);
  it('Realiza um login bem sucedido', async () => {
    sinon.stub(User, 'findOne').resolves(userLogin as User);
    const response = await chai
    .request(app)
    .post('/login')
    .send(userLogin);

    expect(response.status).to.equal(200);
  });

  it('Nao realiza login sem informar email', async () => {
    sinon.stub(User, 'findOne').resolves(userLogin as User);
    const response = await chai
    .request(app)
    .post('/login')
    .send(noEmail)

    expect(response.status).to.equal(400);
    expect(response.body).to.deep.equal( { message: "All fields must be filled" } )
  });

  it('Nao realiza login sem informar password', async () => {
    sinon.stub(User, 'findOne').resolves(userLogin as User);
    const response = await chai
    .request(app)
    .post('/login')
    .send(noPass)

    expect(response.status).to.equal(400);
    expect(response.body).to.deep.equal( { message: "All fields must be filled" } )
  });
});
