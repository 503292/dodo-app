import React, { useState, useEffect } from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import Column from '../../commons/TasksColumn/TasksColumn';
import ModalAddTask from '../../commons/ModalAddTask/ModalAddTask';
import TodoFooter from '../../commons/TodoFooter/TodoFooter';

import css from './Tasks.module.scss';

const Tasks = ({
  data,
  modalAddTasksOpen,
  updateIsCompletedTaskToRedux,
  deleteTaskFromRedux,
  addTaskToRedux,
  updateAllTasksToRedux,
}) => {
  const [tasks, setTasks] = useState([]);
  const [columns, setColumns] = useState({
    'column-1': {
      id: 'column-1',
      tasksIds: [],
    },
  });
  const [columnOrder, setColumnOrder] = useState(['column-1']);
  const [editTask, setEditTask] = useState(null);

  const viewTasks = data => {
    const filtered = data.filter(el => el !== null);
    const arrIds = filtered?.map(el => el.id);
    // const { columns } = this.state;
    const arr = columns['column-1'].tasksIds;
    setTasks(data);
    setColumns({
      'column-1': {
        id: 'column-1',
        title: 'Сьогодні',
        tasksIds: arrIds.length === arr.length ? arr : arrIds,
      },
    });
    setEditTask(null);
    setColumnOrder(['column-1']);
  };

  useEffect(() => {
    const localTasksArr = JSON.parse(localStorage.getItem('localTasks'));
    if (localTasksArr) {
      const filtered = localTasksArr.filter(el => el !== null);

      filtered.map(el => {
        const ids = data?.map(d => d.id);

        if (!ids.includes(el?.id)) {
          addTaskToRedux(el);
        }
        return '';
      });
      viewTasks(localTasksArr);
    }
  }, []);

  useEffect(() => {
    // const { data } = this.props;
    // if (prevProps.data !== data) {
    viewTasks(data);
    // }

    // save in localStorage new arrTask & update sort after drop
    // if (prevState !== this.state) {
    // const { columns } = this.state;
    const tasksIdArr = columns['column-1'].tasksIds;
    const localTasksArr = JSON.parse(localStorage.getItem('localTasks'));
    const newTasks = [];
    tasksIdArr.forEach(el => {
      const oneTask = localTasksArr.find(t => t.id === el);
      if (!oneTask) return;

      newTasks.push(oneTask);
    });

    localStorage.setItem('localTasks', JSON.stringify(newTasks));
  }, [columns.tasksIds]);

  const updateCompleted = async id => {
    await setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );

    const taskTmp = tasks.find(el => el.id === id);
    updateIsCompletedTaskToRedux(taskTmp);

    // update task to localStorage by comleted
    const indexCut = tasks.findIndex(el => el.id === id);
    const localTasksArr = [...tasks];
    localTasksArr.splice(indexCut, 1, taskTmp);
    localStorage.setItem('localTasks', JSON.stringify(localTasksArr));
  };

  const updateTask = task => {
    setEditTask(task);
  };

  const deleteTask = id => {
    deleteTaskFromRedux(id);
  };

  const onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(tasks).length
      : 0;

    document.body.style.backgroundColor = `rgba(170,225,250, ${opacity})`;

    document.body.style.transition = 'background-color 0.9s ease';
  };

  const onDragEnd = async result => {
    document.body.style.color = 'inherit';
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

      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });

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
    // const startTaskIds = Array.from(startColumn.tasksIds);
    // startTaskIds.splice(source.index, 1);
    // const newStartColumn = {
    //   ...startColumn,
    //   tasksIds: startTaskIds,
    // };

    // const finishTaskIds = Array.from(finishColumn.tasksIds);
    // finishTaskIds.splice(destination.index, 0, draggableId);

    // const newFinishColumn = {
    //   ...finishColumn,
    //   tasksIds: finishTaskIds,
    // };

    // const newState = {
    //   ...this.state,
    //   columns: {
    //     ...this.state.columns,
    //     [newStartColumn.id]: newStartColumn,
    //     [newFinishColumn.id]: newFinishColumn,
    //   },
    // };
    // await this.setState(newState);
  };

  return (
    <div className={css.wrapTasks}>
      <div className={css.tasks}>
        <DragDropContext
          onDragEnd={onDragEnd}
          // onDragStart={this.onDragStart}
          onDragUpdate={onDragUpdate}
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
                  updateCompleted={updateCompleted}
                  updateTask={updateTask}
                  deleteTask={deleteTask}
                />
              );
            })}
            <TodoFooter modalAddTasksOpen={modalAddTasksOpen} />
          </div>
        </DragDropContext>
      </div>
      <ModalAddTask
        editTask={editTask}
        handleResetEditTask={() => setEditTask(null)}
      />
    </div>
  );
};

export default Tasks;
