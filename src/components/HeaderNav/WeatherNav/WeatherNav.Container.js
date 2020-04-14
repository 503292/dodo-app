import { connect } from 'react-redux';
import WeatherNav from './WeatherNav';
import { getLocation } from '../../../redux/location/locationSelectors';
import { updateLocation } from '../../../redux/location/locationActions';
import { loaderOff, loaderOn } from '../../../redux/global/globalActions';
import { getIsLoading } from '../../../redux/global/globalSelectors';

const mapStateToProps = state => ({
  locationFromRedux: getLocation(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = { updateLocation, loaderOff, loaderOn };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherNav);
