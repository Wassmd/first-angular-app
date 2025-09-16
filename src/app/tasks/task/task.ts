import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import { Atask } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({ required: true }) task!: Atask;
  @Output() complete = new EventEmitter();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
