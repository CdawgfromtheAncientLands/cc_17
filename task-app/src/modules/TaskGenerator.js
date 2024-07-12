import React, { useState } from 'react';
import taskList from './Tasks';
import platitudes from './Motivation';
import FancyText from './FancyText';

function TaskGenerator() {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [tasks, setTasks] = useState(taskList);

  const nextTask = () => {
    setCurrentTaskIndex((currentTaskIndex + 1) % tasks.length);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const currentTask = tasks[currentTaskIndex];
  const isCompleted = currentTask.isCompleted ? "Completed ✔" : "Pending";
  const motivation = !currentTask.isCompleted ? platitudes[Math.floor(Math.random() * platitudes.length)] : "";

  return (
    <div>
      <h2>{currentTask.name}</h2>
      <p>Status: {isCompleted}</p>
      {!currentTask.isCompleted && <FancyText title="false" text={motivation} />}
      <button onClick={nextTask}>Next Task</button>
      <button onClick={() => toggleTaskCompletion(currentTask.id)}>Toggle Complete</button>
    </div>
  );
}

export default TaskGenerator;