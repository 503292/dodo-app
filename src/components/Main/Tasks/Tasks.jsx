// import React, { Component } from 'react';
// import Task from './Task/Task';
// import AddTaskForm from './AddTaskForm/AddTaskForm';
// import EnterDay from './EnterDay/EnterDay';

// import tasks from '../../../tasks.json';
// import css from './Tasks.module.css';

// class Tasks extends Component {
//   state = {
//     // eslint-disable-next-line react/no-unused-state
//     tasks: {},
//     // day: 0,
//   };

//   // getDay = () => {
//   //   const { day } = this.state;
//   //   const date = new Date();

//   //   const day1 = date.getTime();
//   //   this.setState({ day: day1 });
//   // };
//   // handleClick = e => {
//   //   console.dir(e.currentTarget.style.bacgroundColor, 'dodo');
//   //   return 0;
//   // };

//   render() {
//     return (
//       <>
//         <EnterDay />
//         <ul className={css.wrapTasks}>
//           <Task tasks={tasks} />
//           <AddTaskForm />
//         </ul>

//         {/*
//         TO-DO
//         зі стора redux сюди падають tasks: []
//         */}
//         {/*
//         <TaskDay /> всі таски конкретно вибраного дня
//         <TaskFuture /> всі таски заплановані без дати
//         */}
//       </>
//     );
//   }
// }

// export default Tasks;
