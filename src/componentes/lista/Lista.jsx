import React, { useState } from 'react';

const Lista = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleAddTask = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, { text: nuevaTarea, completed: false }]);
      setNuevaTarea('');
    }
  };

  const handleDeleteTask = (index) => {
    const actualizarTarea = tareas.filter((_, i) => i !== index);
    setTareas(actualizarTarea);
  };

  const handleToggleCompletion = (index) => {
    const actualizarTarea = tareas.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTareas(actualizarTarea);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          placeholder="Nueva tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button onClick={handleAddTask}>Agregar tarea</button>
      </div>
      <ul>
        {tareas.map((task, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </span>
            <button onClick={() => handleToggleCompletion(index)}>
              {task.completed ? 'Marcar como no completada' : 'Marcar como completada'}
            </button>
            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
