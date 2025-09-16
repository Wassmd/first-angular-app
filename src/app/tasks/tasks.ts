import {Component, EventEmitter, inject, input, Output} from '@angular/core';
import {Task} from './task/task';
import {Atask} from './task/task.model';
import {NewTask} from './new-task/new-task';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  taskService = inject(TasksService)
  name = input<string>();
  userId = input<string>();

  isNewTask = false;

  get filteredTasks() {
    return this.taskService.getTasks(this.userId()!);
  }

  onCompleteTask(taskId: string) {
    this.taskService.deleteTask(taskId)
  }

  onStartAddNewTask() {
    this.isNewTask = true;
  }

  closeNewTaskCalled() {
    this.isNewTask = false;
  }

  onTaskAdded(task: Atask) {
    this.taskService.addTask(task);
  }
}
