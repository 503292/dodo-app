import { connect } from 'react-redux';
import Currency from './Currency';

import { updateCurrency } from '../../../redux/currency/currencyActions';
import { getCurrencyMark } from '../../../redux/currency/currencySelectors';

const mapStateToProps = state => ({
  currencyMark: getCurrencyMark(state),
});

const mapDispatchToProps = { updateCurrency };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Currency);
