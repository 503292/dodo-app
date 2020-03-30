import { connect } from 'react-redux';
import WeatherNav from './WeatherNav';
import { getLocation } from '../../../redux/location/locationSelectors';

const mapStateToProps = state => ({
  locationFromRedux: getLocation(state),
});

export default connect(mapStateToProps)(WeatherNav);
