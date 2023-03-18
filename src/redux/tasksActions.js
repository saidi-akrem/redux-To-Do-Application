export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime(),
      text,
      completed: false
    }
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  };
};

export const editTodo = (id) => {
  return {
    type: EDIT_TODO,
    payload: {
      id
    }
  };
};

export const updateTodo = (id, text) => {
  return {
    type: UPDATE_TODO,
    payload: {
      id,
      text
    }
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  };
};
