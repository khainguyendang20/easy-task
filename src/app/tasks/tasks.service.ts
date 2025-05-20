import { Injectable } from '@angular/core';
import { NewTaskPayload, Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = [];

  constructor() {
    const data = localStorage.getItem('tasks');
    if (data) {
      this.tasks = JSON.parse(data);
    }
    console.log(this.tasks);
  }

  getTasksByUserId(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addNewTask(payload: NewTaskPayload, userId: string) {
    this.tasks.unshift({
      ...payload,
      id: new Date().getTime().toString(),
      userId,
    });
    this.saveTasks();
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
