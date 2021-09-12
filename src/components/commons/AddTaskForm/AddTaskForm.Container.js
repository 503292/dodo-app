import { connect } from 'react-redux';
import AddTaskForm from './AddTaskForm';
import { modalAddTasksClose } from '../../../redux/global/globalActions';
import {
  addTaskToRedux,
  updateTaskToRedux,
} from '../../../redux/tasks/tasksActions';
import { getTasks } from '../../../redux/tasks/tasksSelectors';

const mapStateToProps = state => ({
  allTasks: getTasks(state),
});

const mapDispatchToProps = {
  modalAddTasksClose,
  addTaskToRedux,
  updateTaskToRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);
