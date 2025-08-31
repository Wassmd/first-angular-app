import {Component, computed, signal} from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  selectedUser = signal(DUMMY_USERS[0]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  onClick() {
    console.log(this.selectedUser());
    this.selectedUser.set(DUMMY_USERS[1]);
  }
}
