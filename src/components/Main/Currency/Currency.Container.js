import { connect } from 'react-redux';
import Currency from './Currency';

import { updateCurrency } from '../../../redux/currency/currencyActions';

const mapDispatchToProps = {
  updateCurrency,
};

export default connect(null, mapDispatchToProps)(Currency);
