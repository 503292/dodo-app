import React, { Component } from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import Column from '../../commons/TasksColumn/TasksColumn';
import ModalAddTask from '../../commons/ModalAddTask/ModalAddTask';
import TodoFooter from '../../commons/TodoFooter/TodoFooter';

import css from './Tasks.module.css';

// const filteredArrOfNull = data => {
//   data.filter(function(el) {
//     return el != null;
//   });

//   console.log(data, 'data');
// };

class Tasks extends Component {
  state = {
    tasks: [],
    columns: {
      'column-1': {
        id: 'column-1',
        tasksIds: [],
      },
    },
    columnOrder: ['column-1'],
    editTask: null,
  };

  componentDidMount() {
    const localTasksArr = JSON.parse(localStorage.getItem('localTasks'));
    const { addTaskToRedux } = this.props;
    const { data } = this.props;

    if (localTasksArr) {
      // eslint-disable-next-line func-names
      const filtered = localTasksArr.filter(function(el) {
        return el != null;
      });

      filtered.map(el => {
        const ids = data?.map(d => d.id);

        if (!ids.includes(el?.id)) {
          addTaskToRedux(el);
        }
        return '';
      });
      this.viewTasks(localTasksArr);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.props;
    if (prevProps.data !== data) {
      this.viewTasks(data);
    }

    // save in localStorage new arrTask & update sort after drop
    if (prevState !== this.state) {
      const { columns } = this.state;
      const tasksIdArr = columns['column-1'].tasksIds;
      const localTasksArr = JSON.parse(localStorage.getItem('localTasks'));

      const newTasks = [];
      tasksIdArr.forEach(el => {
        const oneTask = localTasksArr.find(t => t.id === el);
        newTasks.push(oneTask);
      });

      localStorage.setItem('localTasks', JSON.stringify(newTasks));
    }
  }

  handleResetEditTask = () => {
    this.setState({ editTask: null });
  };

  viewTasks = data => {
    // eslint-disable-next-line func-names
    const filtered = data.filter(function(el) {
      return el != null;
    });
    // TODO filter by sec/m/h/days
    // console.log(filtered, 'filtered');

    const arrIds = filtered?.map(el => el.id);
    const { columns } = this.state;
    const arr = columns['column-1'].tasksIds;

    this.setState({
      tasks: data,
      columns: {
        'column-1': {
          id: 'column-1',
          title: 'Сьогодні',
          tasksIds: arrIds.length === arr.length ? arr : arrIds,
        },
      },
      editTask: null,
      columnOrder: ['column-1'],
    });
    // }
  };
  /*
   *   crud methods for REDUX
   */

  updateCompleted = async id => {
    const { updateIsCompletedTaskToRedux } = this.props;
    const localTasksArr = JSON.parse(localStorage.getItem('localTasks'));

    await this.setState(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    }));

    const { tasks } = this.state;
    const taskTmp = tasks.find(el => el.id === id);
    updateIsCompletedTaskToRedux(taskTmp);

    // update task to localStorage by comleted

    const indexCut = localTasksArr.findIndex(el => el.id === id);
    localTasksArr.splice(indexCut, 1, taskTmp);
    localStorage.setItem('localTasks', JSON.stringify(localTasksArr));
  };

  updateTask = task => {
    this.setState({
      editTask: task,
    });
  };

  deleteTask = id => {
    const { deleteTaskFromRedux } = this.props;
    deleteTaskFromRedux(id);
  };

  /*
   *   beautiful dnd
   */

  onDragUpdate = update => {
    const { destination } = update;
    const { tasks } = this.state;
    const opacity = destination
      ? destination.index / Object.keys(tasks).length
      : 0;

    document.body.style.backgroundColor = `rgba(170,225,250, ${opacity})`;

    document.body.style.transition = 'background-color 0.9s ease';
  };

  onDragEnd = async result => {
    document.body.style.color = 'inherit';
    const { updateAllTasksToRedux } = this.props;
    const { columns } = this.state;
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const startColumn = columns[source.droppableId];
    const finishColumn = columns[destination.droppableId];
    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.tasksIds);

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        tasksIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);

      // save to localStorage after drop
      const tasksIdArr = newColumn.tasksIds;

      const localTasksArr = JSON.parse(localStorage.getItem('localTasks'));

      const newTasks = [];
      tasksIdArr.forEach(el => {
        const oneTask = localTasksArr.find(t => t.id === el);
        newTasks.push(oneTask);
      });
      localStorage.setItem('localTasks', JSON.stringify(newTasks));
      updateAllTasksToRedux(newTasks);
      return;
    }

    // ця частина коду не використовуєть у звязку з відсутністю інших колонок(columns)
    const startTaskIds = Array.from(startColumn.tasksIds);
    startTaskIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      tasksIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finishColumn.tasksIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinishColumn = {
      ...finishColumn,
      tasksIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    };
    await this.setState(newState);
  };

  render() {
    const { modalAddTasksOpen } = this.props;
    const { columnOrder, columns, tasks, editTask } = this.state;
    return (
      <div className={css.todo}>
        <div className={css.wrapTasks}>
          <DragDropContext
            onDragEnd={this.onDragEnd}
            onDragStart={this.onDragStart}
            onDragUpdate={this.onDragUpdate}
            className={css.dragDropContext}
          >
            <div className={css.container}>
              {columnOrder.map(columnId => {
                const column = columns[columnId];
                const tasksDraw = column.tasksIds.map(taskId =>
                  tasks.find(el => el.id === taskId),
                );
                return (
                  <Column
                    key={column.id}
                    tasksDraw={tasksDraw}
                    column={column}
                    modalAddTasksOpen={modalAddTasksOpen}
                    updateCompleted={this.updateCompleted}
                    updateTask={this.updateTask}
                    deleteTask={this.deleteTask}
                  />
                );
              })}
            </div>
          </DragDropContext>
        </div>

        <TodoFooter modalAddTasksOpen={modalAddTasksOpen} />

        <ModalAddTask
          editTask={editTask}
          handleResetEditTask={this.handleResetEditTask}
        />
      </div>
    );
  }
}

Tasks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  modalAddTasksOpen: PropTypes.func.isRequired,
  updateIsCompletedTaskToRedux: PropTypes.func.isRequired,
  deleteTaskFromRedux: PropTypes.func.isRequired,
  addTaskToRedux: PropTypes.func.isRequired,
  updateAllTasksToRedux: PropTypes.func.isRequired,
};

export default Tasks;
