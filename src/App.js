import React, { Component } from 'react';
import TodoApp from './components/TodoApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoApp></TodoApp>
      </div>
    );
  }
}

export default App;
