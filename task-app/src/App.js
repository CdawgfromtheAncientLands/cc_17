import React from 'react';
import './App.css';
import TaskGenerator from './modules/TaskGenerator';
import FancyText from './modules/FancyText';

function App() {
  return (
    <div className="App">
      <FancyText title="true" text="Task Management Application" />
      <TaskGenerator />
      
      <footer>
        <p>Copyright Chollin Cousseau Workflow Solutions & Modern Ideas Inc.</p>
      </footer>
    </div>
  );
}

export default App;