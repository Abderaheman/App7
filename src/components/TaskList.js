import React from 'react';
import TaskItem from './TasKItem';

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
