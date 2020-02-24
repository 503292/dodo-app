import { connect } from 'react-redux';
import Tasks from './Tasks';
// import { getData } from '../../redux/finance/financeSelectors';
import { modalAddTasksOpen } from '../../../redux/global/globalActions';
import { getTasks } from '../../../redux/tasks/tasksSelectors';

const mapStateToProps = state => ({
  data: getTasks(state),
});

const mapDispatchToProps = {
  modalAddTasksOpen,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tasks);
