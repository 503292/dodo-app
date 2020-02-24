import { connect } from 'react-redux';
import AddTaskForm from './AddTaskForm';
// import { addTransactionOperation } from '../../redux/finance/financeOperations';
// import {
//   getTotalBalance,
//   getTypeTotalBalance,
// } from '../../redux/finance/financeSelectors';
import { modalAddTasksClose } from '../../../../../redux/global/globalActions';

// const mapStateToProps = state => ({
//   totalBalanceState: getTotalBalance(state),
//   typeTotalBalanceState: getTypeTotalBalance(state),
// });

const mapDispatchToProps = {
  //   addTransactionOperation,
  modalAddTasksClose,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddTaskForm);
