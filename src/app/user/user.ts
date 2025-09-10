import {Component, computed, Input, input, output} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({ required: true }) user!: {
    id: string;
    name: string;
    avatar: string;
  };

  imagePath = computed(() => 'assets/users/' + this.user.avatar);
  select = output<string>();


  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
