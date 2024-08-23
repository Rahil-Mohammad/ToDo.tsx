import React from 'react';

interface CreateTodoProps {
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  handleTodo: () => void;
  handleClick: () => void;
}

function CreateTodo({ handleValue, value, handleTodo, handleClick }: CreateTodoProps) {
  return (
    <div className="p-4 space-y-4 border-2 rounded my-4 shadow-md">
      <h3 className="text-xl font-semibold">Create a todo</h3>
      <input
        className="border-2 border-gray-200 rounded w-full p-2"
        placeholder="Write a Task to add to the List"
        onChange={handleValue}
        value={value}
      />
      <button className="bg-yellow-500 px-4 py-2 text-white rounded text-sm font-semibold" onClick={handleTodo}>
        Save
      </button>
      <button
        className="px-4 py-2 rounded text-sm font-semibold ml-4 border border-gray-400"
        onClick={handleClick}
      >
        Cancel
      </button>
    </div>
  );
}

export default CreateTodo;
