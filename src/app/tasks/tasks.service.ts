import {Atask} from './task/task.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
   private tasks: Atask[] = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : [];


  getTasks(userId: string): Atask[] {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(task: Atask) {
    this.tasks.push(task);
    this.saveTasks();
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
