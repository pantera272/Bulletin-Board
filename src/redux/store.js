import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './initialState';
import annoucmentsReducer from './annoucmentsReducer';
import userReducer from './userReducer';

// define reducers
const reducers = {
  annoucments: annoucmentsReducer,
  user: userReducer,
};

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
