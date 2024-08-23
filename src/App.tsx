import './App.css'

import React, { useState, useEffect } from 'react';
import Header from './Header';
import MainContent from './MainContent';

function App() {
  const [todoTaskArray, setTodoTaskArray] = useState<string[]>(
    JSON.parse(localStorage.getItem('todoTaskArray') || '[]') || [
      "Check emails and messages",
      "Review today's agenda and prioritize tasks",
      "Review meeting notes",
      "Implement new features",
      "Update documentation"
    ]
  );
  const [doneTaskArray, setDoneTaskArray] = useState<string[]>(
    JSON.parse(localStorage.getItem('doneTaskArray') || '[]') || []
  );

  useEffect(() => {
    localStorage.setItem('todoTaskArray', JSON.stringify(todoTaskArray));
    localStorage.setItem('doneTaskArray', JSON.stringify(doneTaskArray));
  }, [todoTaskArray, doneTaskArray]);

  const handleTaskStatusChange = (task: string, isDone: boolean) => {
    if (isDone) {
      setDoneTaskArray(doneTaskArray.filter(item => item !== task));
      setTodoTaskArray([...todoTaskArray, task]);
    } else {
      setTodoTaskArray(todoTaskArray.filter(item => item !== task));
      setDoneTaskArray([...doneTaskArray, task]);
    }
  };

  const handleAnotherUser = () => {
    setTodoTaskArray(["Make a todo List for today"]);
    setDoneTaskArray(["Todo created by another user"]);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <MainContent
        todoTaskArray={todoTaskArray}
        doneTaskArray={doneTaskArray}
        handleTaskStatusChange={handleTaskStatusChange}
        handleAnotherUser={handleAnotherUser}
        setTodoTaskArray={setTodoTaskArray}
      />
    </div>
  );
}

export default App;
