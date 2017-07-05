import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { SizeFilter } from '../components/SizeFilter';
import { actionCreators as catalogRouteActionCreators } from '../modules/reducer';


const mapDispatchToProps = {
  setFilter: catalogRouteActionCreators.setSizeFilter,
};

const mapStateToProps = state => ({
  filter: state.catalogRoute.filters.size,
});

const ConnectedSizeFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SizeFilter);

export default (reduxForm({
  form: 'sizeFilter',
})(ConnectedSizeFilter));
