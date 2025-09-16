import {Component, EventEmitter, input, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() close = new EventEmitter();
  @Output() addTaskEmitter = new EventEmitter();
  userId = input<string>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCloseAddNewTask() {
    console.log(this.enteredTitle);
    console.log(this.enteredSummary);
    console.log(this.enteredDueDate);

    this.close.emit();
  }

  onSubmit() {
    console.log("Submitting form...");
    this.addTaskEmitter.emit({
      id: Math.random().toString(),
      userId: this.userId(),
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    });
    this.close.emit();
  }
}
