import { connect } from 'react-redux';
import ModalAddTask from './ModalAddTask';
import { modalAddTasksClose } from '../../../../redux/storeChanges/global/globalActions';
import { getIsModalAddTasksOpen } from '../../../../redux/storeChanges/global/globalSelectors';

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
