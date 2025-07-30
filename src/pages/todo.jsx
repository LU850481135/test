// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Input, Button } from '@/components/ui';
// @ts-ignore;
import { Plus } from 'lucide-react';

import { TaskItem } from '@/components/TaskItem';
export default function TodoList(props) {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: '完成项目原型设计',
    completed: true
  }, {
    id: 2,
    text: '准备会议材料',
    completed: false
  }]);
  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask.trim(),
        completed: false
      }]);
      setNewTask('');
    }
  };
  const toggleTask = taskId => {
    setTasks(tasks.map(task => task.id === taskId ? {
      ...task,
      completed: !task.completed
    } : task));
  };
  const deleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  const completedCount = tasks.filter(task => task.completed).length;
  return <div className="container mx-auto px-4 py-8 max-w-md">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">待办事项</h1>
        <div className="text-sm text-gray-500">
          {completedCount}/{tasks.length} 完成
        </div>
      </div>

      <div className="flex mb-6">
        <Input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} onKeyPress={e => e.key === 'Enter' && addTask()} placeholder="添加新任务..." className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <Button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-3">
        {tasks.length > 0 ? tasks.map(task => <TaskItem key={task.id} task={task} onToggle={() => toggleTask(task.id)} onDelete={() => deleteTask(task.id)} />) : <div className="text-center py-8">
            <p className="text-gray-500">暂无待办事项</p>
          </div>}
      </div>
    </div>;
}