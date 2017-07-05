import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { CountryFilter } from '../components/CountryFilter';
import { actionCreators as catalogRouteActionCreators } from '../modules/reducer';


const mapDispatchToProps = {
  setFilter: catalogRouteActionCreators.setCountryFilter,
};

const mapStateToProps = state => ({
  filter: state.catalogRoute.filters.country,
});

const ConnectedCountryFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryFilter);

export default (reduxForm({
  form: 'countryFilter',
})(ConnectedCountryFilter));
