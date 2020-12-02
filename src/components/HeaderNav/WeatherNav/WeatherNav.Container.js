import { connect } from 'react-redux';
import WeatherNav from './WeatherNav';
import { getLocation } from '../../../redux/location/locationSelectors';
import { updateLocation } from '../../../redux/location/locationActions';

const mapStateToProps = state => ({
  locationFromRedux: getLocation(state),
});

const mapDispatchToProps = {
  updateLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherNav);
