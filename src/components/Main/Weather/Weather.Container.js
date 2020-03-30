import { connect } from 'react-redux';
import Weather from './Weather';
import { updateLocation } from '../../../redux/location/locationActions';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => ({});

const mapDispatchToProps = { updateLocation };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);
