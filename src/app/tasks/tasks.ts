import {Component, input} from '@angular/core';
import {User} from '../user/user';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  name = input<string>();

}
