import { connect } from 'react-redux';

import { FilterControlList } from '../components/FilterControlList';
import { actionCreators as catalogRouteActionCreators } from '../modules/reducer';

const {
  setSizeFilterDropdown,
  setCountryFilterDropdown,
  setMaterialFilterDropdown,
  setPriceFilterDropdown } = catalogRouteActionCreators;

const mapDispatchToProps = {
  setSizeFilterDropdown,
  setCountryFilterDropdown,
  setMaterialFilterDropdown,
  setPriceFilterDropdown,
};

const mapStateToProps = state => ({
  filters: state.catalogRoute.filters,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterControlList);
