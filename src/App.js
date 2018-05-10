import React, { Component } from 'react';
import { observer } from 'mobx-react'

import logo from './logo.svg';
import './App.css';

@observer class App extends Component {
  
  toggledComplete(todo){
    todo.complete = !todo.complete
  }
  createNew(e){
    if(e.which === 13){
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
    }
  }
  filter(e){
    this.props.store.filter = e.target.value
  }

  render() {
    const { clearComplete, filter, filteredTodos, todos } = this.props.store
    const todoLis = filteredTodos.map( todo => (
      <li key={todo.id}>
      <input type="checkbox" onChange={this.toggledComplete.bind(this, todo)} value={todo.complete} checked={todo.complete}/>
      { todo.value }</li>
    ))
    return (
      <div>
        <h1>Todos</h1>
        <input className = "created" onKeyPress={this.createNew.bind(this)}/>
        <input className="filter" value={filter} onChange={this.filter.bind(this)} />
        <ul>{todoLis}</ul>
        <a href="#" onClick={clearComplete}>Clear complete</a>
      </div>
    )}
  }


export default App;
