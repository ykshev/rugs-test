import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { PriceFilter } from '../components/PriceFilter';
import { actionCreators as catalogRouteActionCreators } from '../modules/reducer';


const mapDispatchToProps = {
  setFilter: catalogRouteActionCreators.setPriceFilter,
};

const mapStateToProps = state => ({
  filter: state.catalogRoute.filters.price,
});

const ConnectedPriceFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PriceFilter);

export default (reduxForm({
  form: 'priceFilter',
})(ConnectedPriceFilter));
