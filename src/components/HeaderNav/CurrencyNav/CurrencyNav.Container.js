import { connect } from 'react-redux';
import CurrencyNav from './CurrencyNav';
import { getCurrencyMark } from '../../../redux/currency/currencySelectors';

const mapStateToProps = state => ({
  markFromStore: getCurrencyMark(state),
});

export default connect(mapStateToProps)(CurrencyNav);
