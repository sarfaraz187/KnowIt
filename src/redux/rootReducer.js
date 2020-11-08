import { combineReducers } from 'redux';
import headlinesReducer from './headlines/headlinesReducer';
import technologyReducer from './technology/technologyReducers';
import techCrunchReducer from './techCrunch/techCrunchReducers';
import travelReducer from './travel/travelReducers';
import sportsReducer from './sports/sportsReducer';
import covidReducer from './covid/covidReducer';

const rootReducer = combineReducers({
  headlines: headlinesReducer,
  technology: technologyReducer,
  techCrunch: techCrunchReducer,
  travel: travelReducer,
  sports : sportsReducer,
  covidStats : covidReducer
});

export default rootReducer