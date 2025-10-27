import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Card from '../components/Card';
import Button from '../components/Button';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTasks(prev => [...prev, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active': return !task.completed;
      case 'completed': return task.completed;
      default: return true;
    }
  });

  const completedCount = tasks.filter(task => task.completed).length;
  const activeCount = tasks.length - completedCount;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Task Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your tasks efficiently
        </p>
      </div>

      {/* Add Task Form */}
      <Card className="mb-6">
        <form onSubmit={addTask} className="flex gap-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <Button type="submit" variant="primary">
            Add Task
          </Button>
        </form>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{tasks.length}</h3>
          <p className="text-gray-600 dark:text-gray-400">Total Tasks</p>
        </Card>
        <Card className="text-center">
          <h3 className="text-2xl font-bold text-green-600">{activeCount}</h3>
          <p className="text-gray-600 dark:text-gray-400">Active</p>
        </Card>
        <Card className="text-center">
          <h3 className="text-2xl font-bold text-blue-600">{completedCount}</h3>
          <p className="text-gray-600 dark:text-gray-400">Completed</p>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {['all', 'active', 'completed'].map((filterType) => (
          <Button
            key={filterType}
            variant={filter === filterType ? 'primary' : 'outline'}
            size="small"
            onClick={() => setFilter(filterType)}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </Button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {filter === 'all' ? 'No tasks yet. Add your first task above!' :
               filter === 'active' ? 'No active tasks!' : 'No completed tasks!'}
            </p>
          </Card>
        ) : (
          filteredTasks.map((task) => (
            <Card key={task.id} hover className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span
                  className={`text-lg ${
                    task.completed
                      ? 'line-through text-gray-500 dark:text-gray-400'
                      : 'text-gray-800 dark:text-white'
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <Button
                variant="danger"
                size="small"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </Button>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskManager;