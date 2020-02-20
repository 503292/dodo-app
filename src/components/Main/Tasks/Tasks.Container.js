import { connect } from 'react-redux';
import Tasks from './Tasks';
// import { getData } from '../../redux/finance/financeSelectors';
import { modalAddTasksOpen } from '../../../redux/storeChanges/global/globalActions';

// const mapStateToProps = state => ({
//   data: getData(state),
// });

const mapDispatchToProps = {
  modalAddTasksOpen,
};

export default connect(
  null,
  mapDispatchToProps,
)(Tasks);
