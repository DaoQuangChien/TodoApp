import React, { Component } from 'react'

export default class Todo extends Component {
   render() {
   	//console.log(this.props);
      return (
         <li style={{'textDecoration': this.props.complete ? 'line-through': 'none'}}>
         		<button onClick={this.props.onClick}>{this.props.complete ? 'Done': 'Not done'}</button>
            {this.props.text}
         </li>
      )
   }
}