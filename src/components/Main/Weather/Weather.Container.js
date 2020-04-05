import { connect } from 'react-redux';
import Weather from './Weather';
import { updateLocation } from '../../../redux/location/locationActions';
import { getLocation } from '../../../redux/location/locationSelectors';

const mapStateToProps = state => ({
  locationFromRedux: getLocation(state),
});

const mapDispatchToProps = { updateLocation };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);
