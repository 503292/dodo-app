import { connect } from 'react-redux';
import Info from './Info';

import { setAnimationCheched } from '../../../redux/global/globalActions';
import { getIsAnimationCheck } from '../../../redux/global/globalSelectors';

const mapStateToProps = state => ({
  isChecked: getIsAnimationCheck(state),
});

const mapDispatchToProps = { setAnimationCheched };

export default connect(mapStateToProps, mapDispatchToProps)(Info);
