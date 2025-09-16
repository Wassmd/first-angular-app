import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() close = new EventEmitter();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCloseAddNewTask() {
    console.log(this.enteredTitle);
    console.log(this.enteredSummary);
    console.log(this.enteredDueDate);

    this.close.emit();
  }
}
