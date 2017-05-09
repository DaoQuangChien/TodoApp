let nextTodoId = 0;

export function addTodo(text) {
	return({
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	});
}

export function toggleTodo(todoId) {
	return({
		type: 'TOGGLE_TODO',
		todoId 
	});
}

export function setVisibility(filter) {
	return({
		type: 'SET_VISIBILITY',
		filter
	});
}