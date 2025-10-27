import { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import useLocalStorage from '../hooks/useLocalStorage'

const TasksPage = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all') // all, active, completed

  const addTask = (e) => {
    e.preventDefault()
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask.trim(),
          completed: false,
          createdAt: new Date().toISOString()
        }
      ])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const getFilteredTasks = () => {
    if (filter === 'active') return tasks.filter(task => !task.completed)
    if (filter === 'completed') return tasks.filter(task => task.completed)
    return tasks
  }

  const filteredTasks = getFilteredTasks()

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Task Manager
        </h1>

        {/* Add Task Form */}
        <Card className="mb-6">
          <form onSubmit={addTask} className="flex gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            <Button type="submit" variant="primary">
              Add Task
            </Button>
          </form>
        </Card>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-6 justify-center">
          <Button
            variant={filter === 'all' ? 'primary' : 'secondary'}
            onClick={() => setFilter('all')}
          >
            All ({tasks.length})
          </Button>
          <Button
            variant={filter === 'active' ? 'primary' : 'secondary'}
            onClick={() => setFilter('active')}
          >
            Active ({tasks.filter(t => !t.completed).length})
          </Button>
          <Button
            variant={filter === 'completed' ? 'primary' : 'secondary'}
            onClick={() => setFilter('completed')}
          >
            Completed ({tasks.filter(t => t.completed).length})
          </Button>
        </div>

        {/* Task List */}
        <div className="space-y-2">
          {filteredTasks.length === 0 ? (
            <Card>
              <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                {filter === 'all' 
                  ? 'No tasks yet. Add one above!'
                  : `No ${filter} tasks.`
                }
              </p>
            </Card>
          ) : (
            filteredTasks.map(task => (
              <Card key={task.id} className="animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span 
                      className={`flex-1 ${
                        task.completed 
                          ? 'line-through text-gray-500 dark:text-gray-500' 
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {task.text}
                    </span>
                  </div>
                  <Button
                    variant="danger"
                    onClick={() => deleteTask(task.id)}
                    className="ml-4"
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default TasksPage

