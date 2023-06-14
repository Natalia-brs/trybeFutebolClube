import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/Matches';
import { matchMock } from './mocks/mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Endpoint /matches', () => {
  afterEach(sinon.restore);
  it('Retorna todos os matchs', async () => {
    sinon.stub(Match, 'findAll').resolves(matchMock as any);
    const response = await chai
    .request(app)
    .get('/matches');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(matchMock);
  });
});
