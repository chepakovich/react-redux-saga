import {
  SET_LOADING,
  GET_OPERATORS,
  GET_COMPANIES,
  GET_INSTRUMENTS,
  GET_RUNS,
} from '../actions/opdata-actions';

const initialState = {
  loading: false,
  operators: [],
  companies: [],
  instruments: [],
  runs: [],
};

const opDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_OPERATORS:
      return {
        ...state,
        operators: payload,
        loading: false,
      };
    case GET_COMPANIES:
      return {
        ...state,
        companies: payload,
        loading: false,
      };
    case GET_INSTRUMENTS:
      return {
        ...state,
        instruments: payload,
        loading: false,
      };
    case GET_RUNS:
      return {
        ...state,
        runs: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default opDataReducer;
