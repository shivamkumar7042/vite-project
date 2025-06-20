import { useState } from "react";

const ToDoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`flex justify-between items-center p-3 my-2 border rounded ${todo.completed ? "bg-green-100 line-through" : "bg-white"}`}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-grow border rounded p-1 mr-2"
        />
      ) : (
        <span className="flex-grow">{todo.text}</span>
      )}
      <div className="flex gap-2 ml-2">
        <button onClick={() => onToggle(todo.id)} className="text-green-600 hover:underline">
          {todo.completed ? "Undo" : "Done"}
        </button>
        <button onClick={handleEdit} className="text-yellow-600 hover:underline">
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => onDelete(todo.id)} className="text-red-600 hover:underline">
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
