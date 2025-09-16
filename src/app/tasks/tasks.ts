import {Component, EventEmitter, input, Output} from '@angular/core';
import {Task} from './task/task';
import {DUMMY_TASKS} from '../dummy-tasks';
import {Atask} from './task/task.model';
import {NewTask} from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  name = input<string>();
  userId = input<string>();
  tasks = DUMMY_TASKS;
  isNewTask = false;

  get filteredTasks() {
    return this.tasks.filter(task => task.userId === this.userId());
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onStartAddNewTask() {
    this.isNewTask = true;
  }
}
