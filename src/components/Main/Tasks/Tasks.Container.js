import { connect } from 'react-redux';
import Tasks from './Tasks';
import { modalAddTasksOpen } from '../../../redux/global/globalActions';
import { getTasks } from '../../../redux/tasks/tasksSelectors';
import {
  addTaskToRedux,
  updateIsCompletedTaskToRedux,
  deleteTaskFromRedux,
} from '../../../redux/tasks/tasksActions';

const mapStateToProps = state => ({
  data: getTasks(state),
});

const mapDispatchToProps = {
  modalAddTasksOpen,
  addTaskToRedux,
  updateIsCompletedTaskToRedux,
  deleteTaskFromRedux,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tasks);
