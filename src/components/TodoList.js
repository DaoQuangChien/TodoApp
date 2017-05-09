import React, { Component } from 'react'
import Todo from './Todo.js'

export default class TodoList extends Component {
   render() {
      return (
         <ul>
            {this.props.todos.map(todo =>
               <Todo
               key={todo.id}
               {...todo}
               onClick={()=> this.handleToggle(todo.id)}
               />
            )}
         </ul>
      )
   }

   handleToggle(id) {
      this.props.onToggleClick(id);
   }
}