import { useState } from 'react';
import { ArrowLeft, Check, ClipboardList, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ToDoList.css';

const STORAGE_KEY = 'theni-heritage:todo-list';
const starterTasks = [
  'Visit Meghamalai',
  'Visit Suruli Falls',
  'Visit Kuchanur Saneeswara Temple',
  'Try Theni local food',
  'Visit Vellimalai Murugan Temple',
].map((text, index) => ({ id: `starter-${index}`, text, completed: false }));

function readTasks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { tasks: starterTasks, error: '' };
    const tasks = JSON.parse(stored);
    if (!Array.isArray(tasks) || tasks.some((task) => (
      typeof task.id !== 'string' ||
      typeof task.text !== 'string' ||
      typeof task.completed !== 'boolean'
    ))) {
      throw new Error('Saved task data is invalid.');
    }
    return { tasks, error: '' };
  } catch {
    return { tasks: starterTasks, error: 'Your saved to-do list could not be read. Changes may not be saved.' };
  }
}

export default function ToDoList() {
  const [initial] = useState(readTasks);
  const [tasks, setTasks] = useState(initial.tasks);
  const [filter, setFilter] = useState('pending');
  const [newTask, setNewTask] = useState('');
  const [storageError, setStorageError] = useState(initial.error);

  const saveTasks = (nextTasks) => {
    setTasks(nextTasks);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextTasks));
      setStorageError('');
    } catch {
      setStorageError('Your to-do list could not be saved. Check available browser storage and try again.');
    }
  };

  const addTask = (event) => {
    event.preventDefault();
    const text = newTask.trim();
    if (!text) return;
    saveTasks([
      ...tasks,
      { id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`, text, completed: false },
    ]);
    setNewTask('');
    setFilter('pending');
  };

  const toggleTask = (id) => {
    saveTasks(tasks.map((task) => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )));
  };

  const visibleTasks = tasks.filter((task) => (
    filter === 'all' || (filter === 'completed' ? task.completed : !task.completed)
  ));

  return (
    <div className="todo-page section">
      <div className="container todo-page__container">
        <Link className="todo-page__back" to="/profile"><ArrowLeft size={17} /> Back to Profile</Link>
        <header className="todo-page__header">
          <span className="eyebrow">YOUR THENI JOURNEY</span>
          <h1>My To-Do List</h1>
          <p>Keep the places and experiences you want to explore in one place.</p>
        </header>

        <form className="todo-add card-surface" onSubmit={addTask}>
          <label className="visually-hidden" htmlFor="new-task">Add a task or place to visit</label>
          <input
            id="new-task"
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            placeholder="Add a place or experience…"
            maxLength={120}
            required
          />
          <button className="btn btn-primary" type="submit"><Plus size={18} /> Add Task</button>
        </form>

        {storageError && <p className="todo-page__error" role="alert">{storageError}</p>}

        <section className="todo-list card-surface" aria-label="To-do tasks">
          <div className="todo-list__top">
            <div className="todo-list__title">
              <ClipboardList size={21} />
              <h2>Your plans</h2>
            </div>
            <div className="todo-list__filters" role="group" aria-label="Filter tasks">
              {[
                { id: 'pending', label: 'Pending' },
                { id: 'completed', label: 'Completed' },
                { id: 'all', label: 'All' },
              ].map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={filter === option.id ? 'todo-list__filter todo-list__filter--active' : 'todo-list__filter'}
                  aria-pressed={filter === option.id}
                  onClick={() => setFilter(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {visibleTasks.length ? (
            <ul className="todo-list__items">
              {visibleTasks.map((task) => (
                <li className={`todo-list__item ${task.completed ? 'todo-list__item--completed' : ''}`} key={task.id}>
                  <label className="todo-list__task">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                    />
                    <span className="todo-list__checkbox" aria-hidden="true"><Check size={15} /></span>
                    <span>{task.text}</span>
                  </label>
                  <button
                    className="todo-list__delete"
                    type="button"
                    onClick={() => saveTasks(tasks.filter((item) => item.id !== task.id))}
                    aria-label={`Delete ${task.text}`}
                  >
                    <Trash2 size={17} />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="todo-list__empty">
              <ClipboardList size={30} />
              <p>{filter === 'completed' ? 'No completed tasks yet.' : 'Nothing on your list yet. Add your first plan above.'}</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
