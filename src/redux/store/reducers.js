import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import products from 'redux/reducers/products';
import location from './location';


const makeRootReducer = asyncReducers => combineReducers({
  location,
  form,
  products,
  ...asyncReducers,
});

export const injectReducer = (store, { key, reducer }) => {
  if(Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;