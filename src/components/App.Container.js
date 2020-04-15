import { connect } from 'react-redux';
import App from './App';
import { getIsLoading } from '../redux/global/globalSelectors';

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

export default connect(mapStateToProps)(App);
