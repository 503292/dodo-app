import React, { Component } from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import Column from './Column/Column';
import ModalAddTask from './ModalAddTask/ModalAddTask.Container';

import css from './Tasks.module.css';

class Tasks extends Component {
  state = {
    tasks: [],
    columns: {
      'column-1': {
        id: 'column-1',
        title: `До роботи кусок м'яса`,
        tasksIds: [],
      },
    },
    columnOrder: ['column-1'],
    editTask: null,
  };

  componentDidMount() {
    const localTasksArr = JSON.parse(localStorage.getItem('localTasks'));
    const { addTaskToRedux } = this.props;
    console.log(this.state);

    if (localTasksArr) {
      localTasksArr.map(el => addTaskToRedux(el));
      this.viewTasks(localTasksArr);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.props;
    // const localTasksArr = JSON.parse(localStorage.getItem('localTasks'));
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

  viewTasks = data => {
    const arrIds = data.map(el => el.id);
    const { columns } = this.state;
    const arr = columns['column-1'].tasksIds;
    console.log(arrIds, 'arrIds');
    console.log(arr, 'arr');

    // if(localTasksArr){

    // }
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
  onDragStart = () => {
    // document.body.style.color = '#F34D4D';
  };

  onDragUpdate = update => {
    const { destination } = update;
    const { tasks } = this.state;
    const opacity = destination
      ? destination.index / Object.keys(tasks).length
      : 0;

    document.body.style.backgroundColor = `rgba(135,180,89, ${opacity})`;
    document.body.style.transition = 'background-color 0.9s ease';
  };

  onDragEnd = async result => {
    document.body.style.color = 'inherit';

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

      // console.log(newColumn, 'newColumn');

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);

      // console.log(newState, 'newState');

      // save to localStorage after drop
      const tasksIdArr = newColumn.tasksIds;
      // console.log(tasksIdArr, 'tasksIdArr');
      const localTasksArr = JSON.parse(localStorage.getItem('localTasks'));

      const newTask = [];
      tasksIdArr.forEach(el => {
        //
        const oneTask = localTasksArr.find(t => t.id === el);
        newTask.push(oneTask);
      });

      localStorage.setItem('localTasks', JSON.stringify(newTask));
      // console.log('object');
      return;
    }

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

    console.log(newState, 'newState');
  };

  render() {
    const { modalAddTasksOpen } = this.props;
    const { columnOrder, columns, tasks, editTask } = this.state;
    // console.log(columns['column-1'].tasksIds, 'col');
    return (
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

        {/* <div className={css.wrapEnterDay}>
          <EnterDay />
        </div> */}

        <button
          type="button"
          className={css.addButton}
          onClick={modalAddTasksOpen}
        >
          +
        </button>

        <ModalAddTask editTask={editTask} />
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
};

export default Tasks;
