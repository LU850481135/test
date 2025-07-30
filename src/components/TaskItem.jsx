// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Checkbox, Button } from '@/components/ui';
// @ts-ignore;
import { Trash2 } from 'lucide-react';

export function TaskItem({
  task,
  onToggle,
  onDelete
}) {
  return <div className={`task-item bg-white p-4 rounded-lg shadow flex items-center ${task.completed ? 'opacity-60' : ''}`}>
      <Checkbox checked={task.completed} onCheckedChange={onToggle} className="mr-3 h-5 w-5 text-blue-500 rounded focus:ring-blue-400" />
      <span className={`task-text flex-1 ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
        {task.text}
      </span>
      <Button variant="ghost" size="sm" onClick={onDelete} className="text-gray-400 hover:text-red-500">
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>;
}