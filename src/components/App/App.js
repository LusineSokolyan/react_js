import React , {Component} from 'react';

import Header from '../Header';
import Filter from '../Filter';
import List from '../List';
import AddItem from '../AddItem';

import './App.css';

export default class App extends Component {

  state = {
    todoData: [
      {
        id: 1,
        title: 'Սովորել React'
      },
      {
        id: 2,
        title: 'Կոֆե խմել'
      },
      {
        id: 3,
        title: 'Սովորել Node.js'
      },
      {
        id: 4,
        title: 'Հաց ուտել'
      }
    ]
  };




  onDeleteItem = (id) => {
    this.setState(({todoData}) => {

      const idx = todoData.findIndex((obj) => obj.id === id);

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);

      return {
        todoData: [...before, ...after]
      }

    });

    };

    onAddItem = (text) => {
      this.setState(({ todoData }) =>{

        let id= 1;
        if (todoData[todoData.length-1]){

          id = todoData[todoData.length-1 ].id + 1;
        }
          

        const obj = { id, title: text };

        return {
          todoData: [...todoData, obj]
        };
      });
    }

  render () {
    return (
      <div className="container">
        <Header />
        <Filter />
        <List todoList={this.state.todoData}t
        onDeleteItem = {this.onDeleteItem} />
        <AddItem onAddItem={this.onAddItem} />
      </div>
    );
  }

}


  
  

