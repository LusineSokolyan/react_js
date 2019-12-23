import React, { Component } from 'react';

import './ListItem.css';

class ListItem extends Component {

  state = {
    isDone: false,
    important: false
  };

  onlabelClick = () => {
    this.setState(({ isDone }) => {
      return {
        isDone: !isDone
      }
    });
  };

  onImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      }
    });
  };

  render() {
    const { label, onDeleteItem } = this.props;
    const { isDone, important } = this.state;

    let listClassName = 'pull-left todo-list-title';

    listClassName += important ? ' important': '';
    listClassName += isDone ? ' done': '';
  
    return (
      <li className="list-group-item">
        <span
          className={ listClassName }
          onClick={ this.onlabelClick }
        >
          { label.title }
        </span>
  
        <span className="pull-right todo-list-buttons">
          <button 
           className="btn btn-danger"
             onClick = { () => onDeleteItem (label.id)}>
            <i className="fa fa-trash"></i>
          </button>
          <button
            className="btn btn-success"
            onClick={ this.onImportant }
          >
            <i className="fa fa-info"></i>
          </button>
        </span>
      </li>
    );
  }
};

export default ListItem;