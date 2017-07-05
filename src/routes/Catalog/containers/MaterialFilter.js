import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { MaterialFilter } from '../components/MaterialFilter';
import { actionCreators as catalogRouteActionCreators } from '../modules/reducer';


const mapDispatchToProps = {
  setFilter: catalogRouteActionCreators.setMaterialFilter,
};

const mapStateToProps = state => ( {
  filter: state.catalogRoute.filters.material,
} );

const ConnectedMaterialFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MaterialFilter);

export default (reduxForm({
  form: 'materialFilter',
})(ConnectedMaterialFilter));
