import { combineReducers } from 'redux'

function todo(state, action) {
   switch (action.type) {
	
      case 'ADD_TODO':
         return {
            id: action.id,
            text: action.text,
            complete: false
         }
		
      case 'TOGGLE_TODO':
         if(state.id !== action.todoId){
            return state
         }
         return Object.assign({}, state, {
           complete: !state.complete
         })

      default:
         return state
   }
}

function todos(state = [], action) {
   switch (action.type) {
	
      case 'ADD_TODO':
         return [
            ...state,
            todo(undefined, action)
         ]
			
      case 'TOGGLE_TODO':
         return state.map(t => todo(t, action))

      default:
         return state
   }
}

const todoApp = combineReducers({
   todos
})

export default todoApp