import {Component, input} from '@angular/core';
import {Task} from './task/task';
import {DUMMY_TASKS} from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  name = input<string>();
  userId = input<string>();
  tasks = DUMMY_TASKS;

  get filteredTasks() {
    return this.tasks.filter(task => task.userId === this.userId());
  }
}
