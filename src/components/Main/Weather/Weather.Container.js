import { connect } from 'react-redux';
import Weather from './Weather';
import { updateLocation } from '../../../redux/location/locationActions';
import { getLocation } from '../../../redux/location/locationSelectors';
import { loaderOff, loaderOn } from '../../../redux/global/globalActions';

const mapStateToProps = state => ({
  locationFromRedux: getLocation(state),
});

const mapDispatchToProps = { updateLocation, loaderOff, loaderOn };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);
