import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;
    addTask({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom de la tâche" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description de la tâche" />
      <button type="submit">Ajouter Tâche</button>
    </form>
  );
};

export default TaskForm;
