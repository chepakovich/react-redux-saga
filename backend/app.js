const _ = require('lodash');
const express = require('express');
const cors = require('cors');
const faker = require('faker');

const { v4: uuid } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const port = 4000;

const instruments = [];
const operators = [];
const companies = [];
const runs = [];
for (let i = 0; i < 40; i++) {
  instruments.push({
    id: uuid(),
    name: faker.lorem.word(),
  });
}

for (let i = 0; i < 10; i++) {
  operators.push({
    id: uuid(),
    name: faker.name.findName(),
  });
}


const availableInstruments = [...instruments];
const availableOperators = [...operators];
for (let i = 0; i < 4; i++) {
  const instrumentsToTake = [];
  const operatorsToTake = [];
  let toTake = _.random(availableInstruments.length);
  for(let numRemaining = 0; numRemaining < toTake; numRemaining++){
    instrumentsToTake.push(availableInstruments.splice(_.random(availableInstruments.length - 1), 1)[0].id);
  }
  toTake = _.random(availableOperators.length);
  for(let numRemaining = 0; numRemaining < toTake; numRemaining++){
    operatorsToTake.push(availableOperators.splice(_.random(availableOperators.length - 1), 1)[0].id);
  }
  companies.push({
    id: uuid(),
    name: faker.company.companyName(),
    address: faker.address.streetAddress(true),
    instruments: instrumentsToTake,
    operators: operatorsToTake,
  });
}

let numRuns = 0;
while (numRuns < 100) {
  const { operators: _operators, instruments: _instruments } = companies[_.random(companies.length - 1)];
  if (_operators.length && _instruments.length) {
    runs.push({
      id: uuid(),
      operator: _operators[_.random(_operators.length - 1)],
      instrument: _instruments[_.random(_instruments.length - 1)],
    });
    numRuns++;
  }
}

app.get('/runs', (_, res) => {
  res.send({
    success: true,
    runs,
  });
});

app.get('/companies', (_, res) => {
  res.send({
    success: true,
    companies,
  });
});

app.get('/instruments', (_, res) => {
  res.send({
    success: true,
    instruments,
  });
});

app.get('/operators', (_, res) => {
  res.send({
    success: true,
    operators,
  });
});

app.listen(port, () =>
  console.log(`Data server listening at http://localhost:${port}`),
);