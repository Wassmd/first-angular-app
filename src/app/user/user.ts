import {Component, computed, EventEmitter, input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => 'assets/users/' + this.avatar());

  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.id());
  }
}
