import React from 'react';

function UserInput(props) {
	const input = <input type = "text" name = "todo" onKeyPress = {props.onKeypress} />;
	return input;
}

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.todos = [];
		this.state = {
			iD : 0,
			todo : ""
		};
		this.handlePress = this.handlePress.bind(this);
	}

	handlePress = (e) => {
		if(e.key === "Enter") {
			//console.log("Enter");
			if(e.target.value === "") {
				e.preventDefault();
			}else {
				const value = e.target.value;
				this.setState(prevState => ({
					iD : prevState.iD + 1,
					todo : value
				}));
				//this.todos.push(this.state);
				e.target.value = "";
				//console.log(this.todos);
			}
		}
		//console.log(e.key);
	}

	componentDidUpdate() {
		this.todos.push(this.state);
		//const list = this.todos;
	}

	render() {
		console.log(this.todos);
		return(
			<div>
				<UserInput onKeypress = {this.handlePress} />
				<ListTodo todos = {this.todos} />
			</div>
			//<input type = "text" name = "todo" onKeyPress = {this.handlePress} />
		);
	}
}

function ItemTodo(props) {
	return <li>{props.value}</li>;
}

function ListTodo(props) {
	const todos = props.todos;
	const listTodo = todos.map((todo) => <ItemTodo key={todo.iD} value={todo.todo} />);
	return(
		<ul>
			{listTodo}
		</ul>
	);
}

export default TodoApp;