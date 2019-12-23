import React, {Component} from 'react';

import './AddItem.css';

export default class AddItem extends Component{

  onInputChange = ({ target }) =>{
    this.setState({
      text: target.value
    });
  }

  render(){
    const { onAddItem } = this.props;

    return (
      <div className="row add-item">
        <div className="form-group col-md-9">
          <input 
          className="form-control" 
          placeholder="Add new data" 
          onChange ={ this.onInputChange }
          />
        </div>
        <div className="form-group col-md-3">
          <button 
            className="btn btn-info btn-lg"
            onClick={ () => onAddItem(this.state.text) }
            >
              Add Item
              </button>
        </div>
      </div>
    );

  }
  
  }
  



