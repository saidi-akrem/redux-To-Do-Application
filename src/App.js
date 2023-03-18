import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, updateTodo, toggleTodo } from './redux/tasksActions';
import './App.css';
import Clock from './component/Clock';

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoList);
  const editingTodoId = useSelector(state => state.editingTodoId);
  const [newTodoText, setNewTodoText] = useState('');
  const [editTodoText, setEditTodoText] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const handleNewTodoTextChange = (e) => {
    setNewTodoText(e.target.value);
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      dispatch(addTodo(newTodoText));
      setNewTodoText('');
    }
  };

  const handleEditTodoTextChange = (e) => {
    setEditTodoText(e.target.value);
  };

  const handleEditClick = (todoItem) => {
    dispatch(editTodo(todoItem.id));
    setEditTodoText(todoItem.text);
  };
  const handleUpdateClick = (todoItem) => {
    dispatch(updateTodo(todoItem.id, editTodoText));
    setEditTodoText('');
    };
    
    const handleCancelClick = () => {
    dispatch(editTodo(null));
    setEditTodoText('');
    };
    
    const handleDeleteClick = (todoItem) => {
    dispatch(deleteTodo(todoItem.id));
    };
    
    const handleToggleClick = (todoItem) => {
    dispatch(toggleTodo(todoItem.id));
    };


    const handleFilterChange = (e) => {
      setFilter(e.target.value);
    };
  
    const handleSearchTermChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const filteredTodoList = todoList.filter((todoItem) => {
      if (filter === 'all') {
        return true;
      } else if (filter === 'completed') {
        return todoItem.completed;
      } else if (filter === 'uncompleted') {
        return !todoItem.completed;
      }
    }).filter((todoItem) => {
      return todoItem.text.toLowerCase().includes(searchTerm.toLowerCase());
    });
    
    return (
    <div className="TodoList">
    <h1>To Do Application</h1>
    <Clock />
    
    <br/>


    <div className="filters">
        <label htmlFor="filter">Filter: </label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" value={searchTerm} onChange={handleSearchTermChange} />
      </div>
      <br/>






      <ul>
        {filteredTodoList.map(todoItem => (
          <li key={todoItem.id} className={todoItem.completed ? 'completed' : ''}>
            {editingTodoId === todoItem.id ? (
              <>
    <input type="text" value={editTodoText} onChange={handleEditTodoTextChange} />
    <button onClick={() => handleUpdateClick(todoItem)}>Update</button>
    <button onClick={handleCancelClick}>Cancel</button>
    </>
    ) : (
    <>
    <span>{todoItem.text}</span>
    <button onClick={() => handleEditClick(todoItem)}>Edit</button>
    <button onClick={() => handleDeleteClick(todoItem)}>Delete</button>
    <button onClick={() => handleToggleClick(todoItem)}>Done</button>
    </>
    )}
    </li>
    ))}
    </ul>
    
    <div className="new-todo">
    <input type="text" value={newTodoText} onChange={handleNewTodoTextChange} />
    <button onClick={handleAddTodoClick}>Add Todo</button>
    </div>


    </div>
    );
    }
    
    export default App;