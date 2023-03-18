import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO, TOGGLE_TODO } from './tasksActions';

const initialState = {
  todoList: [],
  editingTodoId: null
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload.id)
      };
    case EDIT_TODO:
      return {
        ...state,
        editingTodoId: action.payload.id
      };
    case UPDATE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              text: action.payload.text
            };
          }
          return todo;
        }),
        editingTodoId: null
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    default:
      return state;
  }
};

export default tasksReducer;