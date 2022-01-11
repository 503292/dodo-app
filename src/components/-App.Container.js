import { connect } from 'react-redux';
import App from './App';
import {
  getIsLoading,
  getIsAnimationCheck,
} from '../redux/global/globalSelectors';

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  isChecked: getIsAnimationCheck(state),
});

export default connect(mapStateToProps)(App);
