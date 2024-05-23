import React, { useState } from 'react';

const TaskItem = ({ task, completeTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleComplete = () => {
    completeTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // handle saving edited task
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing ? (
        <div>
          <input type="checkbox" checked={task.completed} onChange={handleComplete} />
          <span>{task.name}</span>
          <span>{task.description}</span>
          <button onClick={handleEdit}>Modifier</button>
          <button onClick={handleDelete}>Supprimer</button>
        </div>
      ) : (
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button onClick={handleSave}>Enregistrer</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
