import React, { Component } from 'react';
import css from './AddTaskForm.module.css';

class AddTaskForm extends Component {
  state = {};

  render() {
    return (
      <>
        <form className={css.addForm} type="submit">
          <input className={css.addInput} placeholder="enter task ..." />
          <button className={css.addBtn} type="button">
            +
          </button>
        </form>
      </>
    );
  }
}

export default AddTaskForm;
