import { connect } from 'react-redux';
import Tasks from './Tasks';
import { modalAddTasksOpen } from '../../../redux/global/globalActions';
import { getTasks } from '../../../redux/tasks/tasksSelectors';
import {
  addTaskToRedux,
  updateIsCompletedTaskToRedux,
  deleteTaskFromRedux,
  updateAllTasksToRedux,
} from '../../../redux/tasks/tasksActions';

const mapStateToProps = state => ({
  data: getTasks(state),
});

const mapDispatchToProps = {
  modalAddTasksOpen,
  addTaskToRedux,
  updateIsCompletedTaskToRedux,
  deleteTaskFromRedux,
  updateAllTasksToRedux,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tasks);
