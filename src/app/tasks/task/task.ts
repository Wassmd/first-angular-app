import {Component, EventEmitter, inject, Input, input, Output} from '@angular/core';
import {Atask} from './task.model';
import {Card} from '../../shared/card/card';
import {DatePipe} from '@angular/common';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [
    Card,
    DatePipe
  ],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!: Atask;
  private taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.deleteTask(this.task.id);
  }
}
