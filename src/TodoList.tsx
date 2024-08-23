import React from 'react';

interface TodoListProps {
  todoTaskArray: string[];
  handleTaskStatusChange: (task: string, isDone: boolean) => void;
}

function TodoList({ todoTaskArray, handleTaskStatusChange }: TodoListProps) {
  return (
    <>
      <h4 className="text-lg font-medium">Things to do</h4>
      <ul className="mt-4">
        {todoTaskArray.length === 0 ? (
          <div className="text-gray-400">No Todo's Here!</div>
        ) : (
          todoTaskArray.map(item => (
            <li className="flex gap-3 items-center mt-2 font-medium text-gray-700 text-sm" key={item}>
              <input
                className="w-4 h-4"
                type="checkbox"
                onClick={() => handleTaskStatusChange(item, false)}
                value={item}
              />
              {item}
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default TodoList;
