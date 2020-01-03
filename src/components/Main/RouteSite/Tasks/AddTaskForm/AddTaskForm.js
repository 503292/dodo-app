import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import css from './AddTaskForm.module.css';

class AddTaskForm extends Component {
  state = {};

  render() {
    return (
      <>
        <form className={css.addForm} type="submit">
          <input className={css.addInput} placeholder="enter task ..." />
          <button className={css.addBtn} type="button">
            <FontAwesomeIcon className={css.plusIcon} icon={faPlus} />
          </button>
        </form>
      </>
    );
  }
}

export default AddTaskForm;
