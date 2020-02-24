/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

// import PropTypes from 'prop-types';

import styled from 'styled-components';
import css from './Task.module.css';

const Container = styled.div`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid black;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgrey' : 'white')};
  // color: ${props => (props.isDragging ? 'white' : 'black')};
  // font-weight: ${props => (props.isDragging ? '700' : '400')};
`;

class Task extends Component {
  state = {};

  render() {
    const { task, index } = this.props;

    return (
      <>
        <Draggable draggableId={task.id} index={index}>
          {(provided, snapshot) => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
              onClick={this.onClick}
            >
              <div className={css.wrapText}>
                <div className={css.check} />
                {task.text}
              </div>
            </Container>
          )}
        </Draggable>
      </>
    );
  }
}

export default Task;

// import React from 'react';
// import PropTypes from 'prop-types';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle } from '@fortawesome/free-regular-svg-icons';

// import css from './Task.module.css';

// // eslint-disable-next-line react/prop-types
// const Task = ({ tasks }) => {
//   return (
//     <>
//       {tasks.map(task => (
//         <li key={task.id} className={css.wrapTask}>
//           <FontAwesomeIcon className={css.checkBox} icon={faCircle} />
//           <div className={css.wrapInsert}>
//             <p className={css.textTask}>{task.text}</p>
//             <p className={css.timeTask}>{task.time} </p>
//             <p className={css.categoryTask}>{task.color}</p>

//             {/* {task.imgUrl && (
//               <img className={css.imageTask} src={task.imgUrl} alt="task" />
//             )} */}
//           </div>
//         </li>
//       ))}
//     </>
//   );
// };

// export default Task;

// Task.propTypes = {
//   tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
// };
