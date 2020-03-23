import { connect } from 'react-redux';
import Weather from './Weather';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);
