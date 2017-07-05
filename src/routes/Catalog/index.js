import { injectReducer } from 'redux/store/reducers';
import { actionCreators as productsActionCreators } from 'redux/reducers/products';
import reducer from './modules/reducer';
import { CatalogLayout } from './components/CatalogLayout';


export default store => ({
  getComponent(nextState, cb) {
    injectReducer(store, { key: 'catalogRoute', reducer });
    store.dispatch(productsActionCreators.getProducts());
    cb(null, CatalogLayout);
  },
});
