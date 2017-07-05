import { connect } from 'react-redux';

import { FilterList } from '../components/FilterList';
import { actionCreators as catalogRouteActionCreators } from '../modules/reducer';

const {
  setSizeFilter,
  setCountryFilter,
  setMaterialFilter,
  setPriceFilter,
  clearFilters } = catalogRouteActionCreators;

const mapDispatchToProps = {
  setSizeFilter,
  setCountryFilter,
  setMaterialFilter,
  setPriceFilter,
  clearFilters,
};

const mapStateToProps = state => ({
  filters: state.catalogRoute.filters,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterList);
