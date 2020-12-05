import { connect } from 'react-redux';
import CurrencyNav from './CurrencyNav';
import { getCurrencyMark } from '../../../redux/currency/currencySelectors';
import { loaderOff, loaderOn } from '../../../redux/global/globalActions';
import { getIsLoading } from '../../../redux/global/globalSelectors';

const mapStateToProps = state => ({
  markFromStore: getCurrencyMark(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = { loaderOff, loaderOn };

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyNav);
