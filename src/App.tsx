import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from "./components/todolist";
import ComRight from "./components/comRight";
function App() {
  return (
    <div className="App">
        <TodoList></TodoList>
        <ComRight />
    </div>
  );
}

export default App;

