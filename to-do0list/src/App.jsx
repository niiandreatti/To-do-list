import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const [tasks, setTasks] = useState([]);

  function handleAddTask(e) {
    e.preventDefault();
    if (title.trim() === '') return;

    const newTask = {
      title,
      subtitle,
      priority,
    };

    setTasks([...tasks, newTask]);
    setTitle('');
    setSubtitle('');
    setPriority('medium');
  }

  function handdelete(indexParaApagar) {
    const lista = tasks.filter((_, index) => index !== indexParaApagar);
    setTasks(lista);
  }

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1>Minhas Tarefas 🚀</h1>

        <form onSubmit={handleAddTask} className="todo-form">
          <input
            type="text"
            placeholder="O que você precisa fazer?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Adicione uma breve descrição..."
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />

          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">🟢 Baixa</option>
            <option value="medium">🟡 Média</option>
            <option value="high">🔴 Alta</option>
          </select>

          <button type="submit">Adicionar Tarefa</button>
        </form>

        <ul className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Nenhuma tarefa por enquanto. Bora produzir!</p>
          ) : (
            tasks.map((task, index) => (
              <li key={index} className={`task-item priority-${task.priority}`}>
                <div className="task-content">
                  <div className="task-header">
                    <strong>{task.title}</strong>
                    <span className={`badge ${task.priority}`}>
                      {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa'}
                    </span>
                  </div>
                  {task.subtitle && <p className="task-subtitle">{task.subtitle}</p>}
                </div>
                
                <button className="delete-btn" onClick={() => handdelete(index)} title="Excluir tarefa">
                  ❌
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;