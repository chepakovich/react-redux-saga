import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Operator from './Operator';
import {
  GET_OPERATORS_REQUESTED,
  GET_COMPANIES_REQUESTED,
  GET_INSTRUMENTS_REQUESTED,
  GET_RUNS_REQUESTED,
} from '../redux/actions/opdata-actions';

const Operators = ({
  opdata: { loading, operators, companies, instruments, runs },
  getOperators,
  getCompanies,
  getInstruments,
  getRuns,
}) => {
  const [filteredOperators, setFilteredOperators] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    getOperators();
    getCompanies();
    getInstruments();
    getRuns();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setFilteredOperators(operators);
  }, [operators]);

  const hadleChange = (e) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);
    const newlyFiltered = _.filter(filteredOperators, (operator) =>
      operator.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredOperators(newlyFiltered);
  };

  const sortOpertors = () => {
    const sorted = _.orderBy(
      filteredOperators,
      ['name'],
      [sortAsc ? 'asc' : 'desc']
    );
    setFilteredOperators(sorted);
    setSortAsc(!sortAsc);
  };

  const clearAll = () => {
    setFilteredOperators(operators);
    setSearchQuery('');
    setSortAsc(true);
  };

  return (
    <div className="wrapper">
      <h1>Operators</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search operators..."
          onChange={hadleChange}
          value={searchQuery}
        />
      </form>

      <button onClick={sortOpertors}>
        Sort {sortAsc ? 'ascending' : 'descending'}
      </button>

      <button onClick={clearAll}>Clear search and sorting</button>

      {loading && 'Loading...'}
      {filteredOperators &&
        filteredOperators.map((operator) => (
          <Operator key={operator.id} operator={operator} />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  opdata: state.opdata,
});

const mapDispatchToProps = (dispatch) => ({
  getOperators: () => dispatch({ type: GET_OPERATORS_REQUESTED }),
  getCompanies: () => dispatch({ type: GET_COMPANIES_REQUESTED }),
  getInstruments: () => dispatch({ type: GET_INSTRUMENTS_REQUESTED }),
  getRuns: () => dispatch({ type: GET_RUNS_REQUESTED }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Operators);
