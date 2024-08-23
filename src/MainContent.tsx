import React, { useState } from 'react';
import TodoList from './TodoList';
import DoneList from './DoneList';
import CreateTodo from './CreateTodo';

interface MainContentProps {
  todoTaskArray: string[];
  doneTaskArray: string[];
  handleTaskStatusChange: (task: string, isDone: boolean) => void;
  handleAnotherUser: () => void;
  setTodoTaskArray: React.Dispatch<React.SetStateAction<string[]>>;
}

function MainContent({
  todoTaskArray,
  doneTaskArray,
  handleTaskStatusChange,
  handleAnotherUser,
  setTodoTaskArray,
}: MainContentProps) {
  const [createToDo, setCreateToDo] = useState(false);
  const [value, setValue] = useState('');

  const handleClick = () => setCreateToDo(!createToDo);
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleTodo = () => {
    if (value === "") return alert("Please enter a Task");
    setTodoTaskArray([...todoTaskArray, value]);
    setCreateToDo(false);
    setValue("");
  };

  return (
    <>
      <div className="py-8 md:flex justify-between space-y-2 max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold">Things to get done</h2>
        <button
          className="bg-yellow-500 px-4 py-2 text-white rounded text-sm font-semibold hover:bg-yellow-600"
          onClick={handleAnotherUser}
        >
          Refresh
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <TodoList
          todoTaskArray={todoTaskArray}
          handleTaskStatusChange={handleTaskStatusChange}
        />
        {createToDo ? (
          <CreateTodo
            handleValue={handleValue}
            value={value}
            handleTodo={handleTodo}
            handleClick={handleClick}
          />
        ) : (
          <button
            className="bg-yellow-500 px-4 py-2 text-white rounded-full mt-4 text-sm font-semibold hover:bg-yellow-600"
            onClick={handleClick}
          >
            + Add a todo
          </button>
        )}
        <DoneList
          doneTaskArray={doneTaskArray}
          handleTaskStatusChange={handleTaskStatusChange}
        />
      </div>
    </>
  );
}

export default MainContent;
