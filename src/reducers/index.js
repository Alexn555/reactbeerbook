import { combineReducers } from 'redux';
import BeerReducer from './beer-reducer';

const reducers = {
  beerStore: BeerReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
