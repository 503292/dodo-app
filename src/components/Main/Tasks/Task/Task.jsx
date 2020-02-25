/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';
import PrioritySelector from '../ModalAddTask/PrioritySelector/PrioritySelector';

import Priority from '../../../../utils/Priority';

import css from './Task.module.css';

const options = Object.values(Priority);

const Container = styled.div`
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgrey' : 'white')};
  // color: ${props => (props.isDragging ? 'white' : 'black')};
  // font-weight: ${props => (props.isDragging ? '700' : '400')};
`;

class Task extends Component {
  state = {};

  render() {
    const { task, index, updateCompleted } = this.props;

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
              <div className={`${css.task} ${css[`${task.priority}Priority`]}`}>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className={css.wrapText}>
                  <input
                    className={css.completedCheckbox}
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => updateCompleted(task.id)}
                  />
                  <p
                    className={
                      task.completed === true
                        ? `${css.lineThrough} ${css.text}`
                        : css.text
                    }
                  >
                    {task.text}
                  </p>
                </label>

                <div className={css.actions}>
                  {!task.completed ? (
                    <PrioritySelector
                      options={options}
                      value={task.priority}
                      // onChange={e => onUpdatePriority(id, e.target.value)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className={css.deleteBtn}
                      // onClick={onDeleteTask}
                      icon={faTrashAlt}
                    />
                  )}
                </div>
              </div>
              {/* <div className={css.wrapText}>
                <div className={css.check} />
                {task.text}
              </div> */}
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
