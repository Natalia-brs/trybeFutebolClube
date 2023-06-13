import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Teams';
import teams from './mocks/mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Endpoint /teams', () => {
  afterEach(sinon.restore);
  it('Requisição realizada com sucesso', async () => {
    sinon.stub(Team, 'findAll').resolves(teams as Team[]);
    const response = await chai
    .request(app)
    .get('/teams');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(teams);
  });
});
