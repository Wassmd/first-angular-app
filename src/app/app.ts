import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import {User} from './user/user';
import {DUMMY_USERS} from './dummy-user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  protected readonly title = signal('first-angular-app');
  onSelectedUser(id: string) {
    alert('Selected user: ' + id);
  }
}
