import { connect } from 'react-redux';
import ModalAddTask from './ModalAddTask';
import { modalAddTasksClose } from '../../../../redux/global/globalActions';
import { getIsModalAddTasksOpen } from '../../../../redux/global/globalSelectors';

const mapStateToProps = state => ({
  isModalAddTasksOpen: getIsModalAddTasksOpen(state),
});

const mapDispatchToProps = {
  modalAddTasksClose,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalAddTask);
